import type { WorkOrderPage, Todo } from "./types";
import axios from "axios";

async function getWorkOrders(
    page: number,
    limit: number,
    keyword?: string,
    status?: string
): Promise<WorkOrderPage>{
        // const response = await fetch("https://jsonplaceholder.typicode.com/todos");

        // if (!response.ok) {
        //     throw new Error("请求失败");
        // }

        // const data: Todo[] = await response.json();
        
        const params: {
            _page: number,
            _limit: number,
            keyword?: string,
            status?: string
        } = {
            _page: page,
            _limit: limit
        }

        const trimmedKeyword = keyword?.trim();

        if (trimmedKeyword) {
            params.keyword = trimmedKeyword
        }

        if (status) {
            params.status = status
        }

        const response = await axios.get<Todo[]>("https://jsonplaceholder.typicode.com/todos",
            {
                params
            }
        );

        const workOrderData = 
            response.data.map(
                item => ({
                    id: item.id,
                    orderNumber: item.title
                })
            );
        
        const total = Number(response.headers["x-total-count"] ?? 0);

        return {
            items: workOrderData,
            total
        };

}

export {
    getWorkOrders
};