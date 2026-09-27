import { useState } from "react";
import { 
    Pagination,
    Table,
    Tag,
    Input,
    Select,
    Button,
    Form,
    Modal,
    Popconfirm
} from "antd";
import type { TableProps } from "antd";

interface Equipment {
    id: number;
    equipmentCode: string;
    equipmentName: string;
    type: "CUTTING" | "WELDING" | "ASSEMBLY";
    status: "RUNNING" | "STOPPED" | "MAINTENANCE";
}

interface EquitmentFormValues {
    equipmentCode: string;
    equipmentName: string;
    type: Equipment["type"];
    status: Equipment["status"];
}

function EquipmentPage() {
    const [page, setPage] = useState(1);
    const [inputEquipmentName, setInputEquipmentName] = useState("");
    const [keyEquipmentName, setKeyEquipmentName] = useState("");
    const [selectedStatus, setSelectedStatus] = useState<Equipment["status"] | "ALL">("ALL");
    const [keyStatus, setKeyStatus] = useState<Equipment["status"] | "ALL">("ALL");
    const [open, setOpen] = useState(false);
    const [editingEquipment, setEditingEquipment] = useState<Equipment | null>(null);
    const [form] = Form.useForm<EquitmentFormValues>();
    const [equitments, setEquitments] = useState<Equipment[]>(
        [
            {
                id: 1,
                equipmentCode: "EQ-001",
                equipmentName: "激光切割机",
                type: "CUTTING",
                status: "RUNNING",
            },
            {
                id: 2,
                equipmentCode: "EQ-002",
                equipmentName: "自动焊接机",
                type: "WELDING",
                status: "MAINTENANCE",
            }
        ] 
    )

    const limit = 5;

    const handleEdit = (record: Equipment) => {
        setEditingEquipment(record);
        form.setFieldsValue({
            equipmentCode: record.equipmentCode,
            equipmentName: record.equipmentName,
            type: record.type,
            status: record.status
        });
        setOpen(true);
    }

    const handleDelete = (record: Equipment) => {
        setEquitments(
            prve => prve.filter(
                item => item.id !== record.id
            )
        )
    }

    const columns: TableProps<Equipment>["columns"] = [
        {
            title: "设备编号",
            dataIndex: "equipmentCode"
        },
        {
            title: "设备名称",
            dataIndex: "equipmentName"
        },
        {
            title: "设备类型",
            dataIndex: "type",
            render: (value: Equipment["type"]) => {
                if (value === "CUTTING") {
                    return <Tag>切割设备</Tag>
                } else if (value === "WELDING") {
                    return <Tag>焊接设备</Tag>
                }

                return <Tag>装配设备</Tag>
            }
        },
        {
            title: "设备状态",
            dataIndex: "status",
            render: (value: Equipment["status"]) => {
                if (value === "RUNNING") {
                    return <Tag>运行中</Tag>
                } else if (value === "STOPPED") {
                    return <Tag>已停机</Tag>
                }

                return <Tag>维护中</Tag>
            }
        },
        {
            title: "操作",
            render: (_,record) => {
                return (
                    <>
                        <Button
                            type="primary"
                            onClick={
                                () => handleEdit(record)
                            }
                        >
                            编辑
                        </Button>
                        <Popconfirm
                            title="确定删除这件设备吗？"
                            cancelText="取消"
                            okText="确定"
                            onConfirm={
                                () => handleDelete(record)
                            }
                        >
                            <Button
                                danger
                            >
                                删除
                            </Button>
                        </Popconfirm>
                    </>
                )
            }
        }
    ]

    const filteredEquitments = equitments.filter(
        equitment => {
            const matchName = equitment.equipmentName
                .includes(keyEquipmentName.trim().toUpperCase());

            const matchStatus = 
                keyStatus === "ALL" || equitment.status === keyStatus;

            return matchName && matchStatus;
        }
    )

    const pagedEquipments = filteredEquitments.slice((page - 1) * limit, page * limit);

    const handleSearch = () => {
        setKeyEquipmentName(inputEquipmentName.trim().toUpperCase());
        setKeyStatus(selectedStatus);
        setPage(1);
    }

    const handleAdd = () => {
        setEditingEquipment(null);
        form.resetFields();
        setOpen(true);
    }

    const handleSubmit = (values: EquitmentFormValues) => {
        if (editingEquipment === null) {
            const newEquipment: Equipment = {
                id: Date.now(),
                ...values
            }
            setEquitments(
                (prev) => [...prev, newEquipment]
            )
        } else {
            setEquitments(
                prev => prev.map(
                    item => item.id === editingEquipment.id 
                            ? {
                                ...item,
                                ...values
                              }
                            : item
                )
            )
        }

        form.resetFields();
        setOpen(false);
        setEditingEquipment(null);
    }

    return (
        <>
            <Input
                type="text"
                placeholder="请输入设备名称"
                value={inputEquipmentName}
                onChange={
                    (event) => setInputEquipmentName(event.target.value)
                }
            />
            <Select<Equipment["status"] | "ALL">
                value={selectedStatus}
                onChange={
                    (value) => setSelectedStatus(value)
                }
                options={[
                    {
                        value: "ALL",
                        label: "全部"
                    },
                    {
                        value: "RUNNING",
                        label: "运行中"
                    },
                    {
                        value: "STOPPED",
                        label: "已停机"
                    },
                    {
                        value: "MAINTENANCE",
                        label: "维护中"
                    }
                ]}
            />
            <Button
                type="primary"
                onClick={handleSearch}
            >
                搜索
            </Button>
            <Button
                type="primary"
                onClick={handleAdd}
            >
                新增设备
            </Button>
            <Modal
                open={open}
                title={editingEquipment === null ? "新增设备" : "编辑设备"}
                footer={null}
                onCancel={
                    () => {
                        setOpen(false);
                        form.resetFields();
                        setEditingEquipment(null);
                    }
                }
            >
                <Form<EquitmentFormValues>
                    form={form}
                    onFinish={handleSubmit}
                >
                    <Form.Item
                        label="设备编号"
                        name="equipmentCode"
                        rules={[
                            {
                                required: true,
                                message: "请输入设备编号"
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="设备名称"
                        name="equipmentName"
                        rules={[
                            {
                                required: true,
                                message: "请输入设备名称"
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="设备类型"
                        name="type"
                        rules={[
                            {
                                required: true,
                                message: "请选择设备类型"
                            }
                        ]}
                    >
                        <Select 
                            options={[
                                {
                                    label: "切割设备",
                                    value: "CUTTING"
                                },
                                {
                                    label: "焊接设备",
                                    value: "WELDING"
                                },
                                {
                                    label: "装配设备",
                                    value: "ASSEMBLY"
                                }
                            ]}
                        />
                    </Form.Item>
                    <Form.Item
                        label="设备状态"
                        name="status"
                        rules={[
                            {
                                required: true,
                                message: "请选择设备状态" 
                            }
                        ]}
                    >
                        <Select 
                            options={[
                                {
                                    label: "运行中",
                                    value: "RUNNING"
                                },
                                {
                                    label: "已停机",
                                    value: "STOPPED"
                                },
                                {
                                    label: "维护中",
                                    value: "MAINTENANCE"
                                }
                            ]}
                        />
                    </Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                    >
                        提交
                    </Button>
                </Form>
            </Modal>
            <Table 
                dataSource={pagedEquipments}
                columns={columns}
                rowKey="id"
                pagination={false}
            />
            <Pagination 
                current={page}
                pageSize={limit}
                total={filteredEquitments.length}
                onChange= {
                    (newPage) => {
                        setPage(newPage);
                    }
                }
            />
        </>
    )
}

export default EquipmentPage;