import React, { useState, useEffect }  from 'react';

const WorkOrderPage = () => {
  const [workOrders, setWorkOrders] = useState([]);

  useEffect(() => {
    // 模拟从服务器获取工单数据
    const fetchWorkOrders = async () => {
      const data = [
        { id: 1, title: '修复登录问题', description: '用户无法登录', priority: '高', status: '进行中' },
        { id: 2, title: '更新主页内容', description: '更新主页上的图片和文字', priority: '中', status: '待处理' },
        { id: 3, title: '修复支付问题', description: '支付页面报错', priority: '高', status: '已完成' }
      ];
      setWorkOrders(data);
    };

    fetchWorkOrders();
  }, []);

  return (
    <div className="page-width ">
    <div className="min-h-screen  flex flex-col items-center">
      <main className="flex-grow container mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">创建新工单</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">标题</label>
              <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
            </div>
            <div>
              <label className="block text-gray-700">描述</label>
              <textarea className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"></textarea>
            </div>
            <div>
              <label className="block text-gray-700">优先级</label>
              <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                <option>低</option>
                <option>中</option>
                <option>高</option>
              </select>
            </div>
            <div className="text-right">
              <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700">
                提交
              </button>
            </div>
          </form>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">工单列表</h2>
            <ul className="space-y-4">
              {workOrders.map((order) => (
                <li key={order.id} className="border p-4 rounded-md shadow-sm">
                  <h3 className="text-lg font-semibold">{order.title}</h3>
                  <p>{order.description}</p>
                  <p>优先级: {order.priority}</p>
                  <p>状态: {order.status}</p>
                </li>
              ))}
            </ul>
        </div>
      </main>
      
    </div>
    </div>
  );
};

export default WorkOrderPage;

export const layout = {
  areaId: "content",
  sortOrder: 1,
};
