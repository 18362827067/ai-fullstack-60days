import { 
    Button, 
    Table, 
    Tag,
    Form,
    Input,
    InputNumber,
    Modal,
    Select,
    Popconfirm
} from "antd";
import type { TableProps } from "antd";
import { useState, useRef, useEffect } from "react";
import type { Key } from "react";
import * as echarts from "echarts";

interface WorkOrder {
    id: number;
    orderNumber: string;
    planQuantity: number;
    status: "CREATED" | "PROCESSING" | "COMPLETED";
    priority: "LOW" | "MEDIUM" | "HIGH";
}

interface WorkOrderFormValues {
    orderNumber: string;
    planQuantity: number;
    status: WorkOrder["status"];
    priority: WorkOrder["priority"];
}

function WorkOrderTablePage() {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const [open, setOpen] = useState(false);
    const [editingWorkOrder, setEditingWorkOrder] = useState<WorkOrder | null>(null);
    const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);
    const [batchOpen, setBatchOpen] = useState(false);
    const [batchForm] = Form.useForm<{ status: WorkOrder["status"] }>();
    const chartRef = useRef<HTMLDivElement>(null);
    const chartInstanceRef = useRef<echarts.ECharts | null>(null);

    const [workOrders, setWorkOrders] = useState<WorkOrder[]>(
        [
            {
                id: 1,
                orderNumber: "WO-001",
                planQuantity: 1000,
                status: "PROCESSING",
                priority: "HIGH"
            },
            {
                id: 2,
                orderNumber: "WO-002",
                planQuantity: 2000,
                status: "COMPLETED",
                priority: "MEDIUM"
            }
        ]
    );

    const total = 95;

    const columns: TableProps<WorkOrder>['columns'] = [
        {
            title: "ID",
            dataIndex: "id"
        },
        {
            title: "工单号",
            dataIndex: "orderNumber"
        },
        {
            title: "计划数量",
            dataIndex: "planQuantity",
            render: (value: WorkOrder["planQuantity"]) => `${value} 件`
        },
        {
            title: "状态",
            dataIndex: "status",
            render: (value: WorkOrder["status"]) => {
                if (value === "PROCESSING") {
                    return <Tag color="blue">处理中</Tag>
                } else if (value === "COMPLETED") {
                    return <Tag color="green">已完成</Tag>
                }
    
                return <Tag>已创建</Tag>
            }
        },
        {
            title: "优先级",
            dataIndex: "priority",
            render: (value: WorkOrder["priority"]) => {
                if (value === "HIGH") {
                    return <Tag color="red">高</Tag>
                } else if (value === "MEDIUM") {
                    return <Tag color="orange">中</Tag>
                }

                return <Tag>低</Tag>
            }
        },
        {
            title: "操作",
            render: (_,record) => {
                return (
                    <>
                        <Button
                            onClick={
                                () => {
                                    setEditingWorkOrder(record);
                                    
                                    form.resetFields();

                                    form.setFieldsValue({
                                        orderNumber: record.orderNumber,
                                        planQuantity: record.planQuantity,
                                        status: record.status,
                                        priority: record.priority
                                    });

                                    setOpen(true);
                                }
                            }
                        >
                            编辑
                        </Button>
                        <Popconfirm
                            title="确定删除这条工单吗？"
                            cancelText="取消"
                            okText="确定"
                            onConfirm={
                                () => {
                                    setWorkOrders(
                                        (prev) => prev.filter((item) => item.id !== record.id)
                                    )
                                }
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

    useEffect(() => {
        if (!chartRef.current) return;

        const chart = echarts.init(chartRef.current);

        chartInstanceRef.current = chart;

        return () => {
            chart.dispose();
            chartInstanceRef.current = null;
        }
    }, [])

    useEffect(() =>{
        if (!chartInstanceRef.current) return;

        chartInstanceRef.current.setOption({
            xAxis: {
                type: "category",
                data: workOrders.map((item) => item.orderNumber)
            },
            yAxis: {
                type: "value"
            },
            series:[
                {
                    type: "bar",
                    data: workOrders.map((item) => item.planQuantity)
                }
            ]
        })
    }, [workOrders]);

    return (
        <div>
            <h2>工单管理</h2>
            <Button
                onClick={
                    () => {
                        setEditingWorkOrder(null);
                        form.resetFields();
                        setOpen(true);
                    }
                }
            >
                新增工单
            </Button>
            <Button
                disabled={selectedRowKeys.length === 0}
                onClick={
                    () => {
                        batchForm.resetFields();
                        setBatchOpen(true);
                    }
                }
            >
                批量修改状态
            </Button>
            <Modal
                title={editingWorkOrder === null ? "新增工单": "编辑工单"}
                open={open}
                onCancel={
                    () => {
                        setOpen(false);
                        form.resetFields();
                        setEditingWorkOrder(null);
                    }
                }
                footer={null}
            >
                <Form<WorkOrderFormValues>
                    form={form}
                    initialValues={{
                        status: "CREATED"
                    }}
                    onFinish={
                        (value) => {
                            if (editingWorkOrder === null) {
                                const newWorkOrder: WorkOrder = {
                                    id: Date.now(),
                                    ...value
                                }
                                setWorkOrders((prev) => [...prev, newWorkOrder])
                            } else {
                                setWorkOrders(
                                    (prev) => 
                                        prev.map(
                                            (item) => 
                                                item.id === editingWorkOrder.id
                                                ? {
                                                    ...item,
                                                    ...value
                                                }
                                                : item
                                        )
                                    
                                )
                                
                            }

                            form.resetFields();
                            setOpen(false);
                            setEditingWorkOrder(null);
                        }
                    }
                >
                    <Form.Item
                        label="工单号"
                        name="orderNumber"
                        rules={[
                            {
                                required: true,
                                message: "请输入工单号"
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="计划数量"
                        name="planQuantity"
                        rules={[
                            {
                                required: true,
                                message: "请输入计划数量"
                            },
                            {
                                type: "number",
                                min: 1,
                                message: "计划数量必须大于 0"
                            }
                        ]}
                    >
                        <InputNumber />
                    </Form.Item>
                    <Form.Item
                        label="状态"
                        name="status"
                        rules={[
                            {
                                required: true,
                                message: "请选择状态",
                            }
                        ]}
                    >
                        <Select 
                            options={[
                                {
                                    label: "已创建",
                                    value: "CREATED"
                                },
                                {
                                    label: "处理中",
                                    value: "PROCESSING"
                                },
                                {
                                    label: "已完成",
                                    value: "COMPLETED"
                                }
                            ]}
                        />
                    </Form.Item>
                    <Form.Item
                        label="优先级"
                        name="priority"
                        rules={[
                            {
                                required: true,
                                message: "请选择优先级",
                            }
                        ]}
                    >
                        <Select
                            options={[
                                {
                                    label: "低",
                                    value: "LOW"
                                },
                                {
                                    label: "中",
                                    value: "MEDIUM"
                                },
                                {
                                    label: "高",
                                    value: "HIGH"
                                }
                            ]}
                        />
                    </Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                    >
                        {
                            editingWorkOrder === null ? "新增": "保存"
                        }
                    </Button>
                </Form>
            </Modal>
            <Modal
                title="批量修改状态"
                open={batchOpen}
                onCancel={
                    () => {
                        setBatchOpen(false);
                        batchForm.resetFields();
                    }
                }
                footer={null}
            >
                <Form<{ status: WorkOrder["status"] }>
                    form={batchForm}
                    onFinish={
                        (value) => {
                            setWorkOrders(
                                (prev) =>
                                    prev.map(
                                        (item) =>
                                            selectedRowKeys.includes(item.id)
                                            ? {
                                                ...item,
                                                status: value.status
                                            }
                                            : item
                                    )
                            );
                            setBatchOpen(false);
                            setSelectedRowKeys([]);
                            batchForm.resetFields();
                        }
                    }
                >
                    <Form.Item
                        label="状态"
                        name="status"
                        rules={[
                            {
                                required: true,
                                message: "请选择状态",
                            }
                        ]}
                    >
                        <Select
                            options={[
                                {
                                    label: "已创建",
                                    value: "CREATED"
                                },
                                {
                                    label: "处理中",
                                    value: "PROCESSING"
                                },
                                {
                                    label: "已完成",
                                    value: "COMPLETED"
                                }
                            ]}
                        />
                    </Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                    >
                        保存
                    </Button>
                </Form>
            </Modal>
            <Table 
                columns={columns}
                dataSource={workOrders}
                rowKey="id"
                loading={loading}
                rowSelection={{
                    selectedRowKeys,
                    preserveSelectedRowKeys: true,
                    onChange: (keys) => {
                        setSelectedRowKeys(keys);
                    }
                }}
                pagination={{
                    current: page,
                    pageSize: limit,
                    total,
                    showSizeChanger: true,
                    pageSizeOptions: [10, 20, 50],
                    onChange: (newPage, newPageSize) => {
                        if (newPageSize !== limit) {
                            setLimit(newPageSize);
                            setPage(1);
                            return;
                        }

                        setPage(newPage);
                    }
                }}
            />
            <div 
                ref={chartRef}
                style={
                    {
                        width: "100%",
                        height: "400px"
                    }
                }
            />
        </div>
    )
}

export default WorkOrderTablePage;