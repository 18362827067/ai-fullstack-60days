import { useState, useEffect } from "react";
import type { WorkOrder } from "./types";
import { getWorkOrders } from "./workOrderApi";
import axios from "axios";

function WorkOrderApiPage() {
    const [workOrders, setWorkOrders] = useState<WorkOrder[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [inputKeyword, setInputkeyword] = useState("");
    const [keyword, setKeyword] = useState("");
    const [refreshKey, setRefreshKey] = useState(0);
    const [status, setStatus] = useState("");
    const [limit, setLimit] = useState(10);

    const totalPages = Math.ceil(total / limit);
    const hasPreviousPage = page > 1;
    const hasNextPage = page < totalPages;

    useEffect(() => {
        async function loadWorkOrders() {
            try {
                setLoading(true);
                setError(null);

                const data = await getWorkOrders(page, limit, keyword, status);
    
                setWorkOrders(data.items);
                setTotal(data.total);
            } 
            catch (error) {
                if (axios.isAxiosError(error)) {
                    if (error.response?.status) {
                        setError(`请求失败，状态码：${error.response.status}`)
                    }
                    else {
                        setError("网络请求失败")
                    }
                    
                } 
                else if (error instanceof Error) {
                    setError(error.message);
                } 
                else {
                    setError("未知错误");
                }
            }
            finally {
                setLoading(false);
            }

        }

        loadWorkOrders();
        

        // fetch("https://jsonplaceholder.typicode.com/todos").then(response => {
        //         if (!response.ok) {
        //             throw new Error("请求失败");
        //         }

        //         return response.json();
        //     })
        //     .then((data: Todo[]) => {
        //         const workOrderData = data.map(
        //             item => ({
        //                 id: item.id,
        //                 orderNumber: item.title
        //             })
        //         )

        //         setWorkOrders(workOrderData);
        //     })
        //     .catch(error => {
        //         if (error instanceof Error) {
        //             setError(error.message)
        //         } else {
        //             setError("未知错误");
        //         }
        //     })
        //     .finally(() => setLoading(false)) 
    }, [page, keyword, refreshKey, status, limit])

    function handleSearch() {
        setKeyword(inputKeyword);
        setPage(1);
        setRefreshKey(prevKey => prevKey + 1);
    }

    function handleClear() {
        setInputkeyword("");
        setKeyword("");
        setPage(1); 
        setStatus("");
        setRefreshKey(prevRefreshKey => prevRefreshKey + 1);
    }
 
    if (loading) {
        return <p>正在加载工单...</p>;
    }

    if (error) {
        return <p>{error}</p>
    }

    if (workOrders.length === 0) {
        return <p>暂无工单</p>
    }

    return (
        <>
            <p>API 工单列表</p>
            <input 
                type="text"
                value={inputKeyword}
                onChange={event => setInputkeyword(event.target.value)}
            />
            <select
                value={status}
                onChange={event => {
                    setStatus(event.target.value);
                    setPage(1)
                }}
            >
                <option value="">全部状态</option>
                <option value="PROCESSING">处理中</option>
                <option value="COMPLETED">已完成</option>
            </select>
            <select
                value={limit}
                onChange={event => {
                    setLimit(Number(event.target.value));
                    setPage(1);
                }}
            >
                <option value={10}>10 条/页</option>
                <option value={20}>20 条/页</option>
                <option value={50}>50 条/页</option>

            </select>
            <button
                onClick={handleSearch}
            >
                搜索
            </button>
            <button
                onClick={handleClear}
            >
                清空
            </button>
            {workOrders.map(
                workOrder => (
                    <p key={workOrder.id}>
                        {workOrder.id} - {workOrder.orderNumber}
                    </p>
                )
            )}
            <p>当前页: {page} / {totalPages},共 {total} 条</p>
            <button onClick={() => setPage(prevPage  => prevPage  - 1)} disabled={!hasPreviousPage}>[上一页]</button>
            <button onClick={() => setPage(prevPage  => prevPage  + 1)} disabled={!hasNextPage}>[下一页]</button>
        </>
    )
}

export default WorkOrderApiPage;