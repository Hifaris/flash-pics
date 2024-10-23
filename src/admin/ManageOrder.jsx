import React, { useEffect, useState } from 'react';
import { allOrder } from '../api/cart';
import useAuthStore from '../store/auth-store';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function ManageOrder() {
  const token = useAuthStore((state) => state.token);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUserOrders = async () => {
    try {
      const response = await allOrder(token);
      setOrders(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserOrders();
  }, []);

  return (
    
    <div className="bg-gray-200 w-full h-full flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <Card>
          <CardHeader className="items-center">
            <CardTitle className="text-2xl font-bold text-sky-600">User  Orders</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-10">
                <p className="text-lg font-medium text-gray-600">Loading...</p>
              </div>
            ) : (
              <Table className="w-full mt-5">
                <TableHeader className="text-lg font-medium">
                  <TableRow>
                    <TableHead className="w-[100px] text-sky-600 py-2">Order Id</TableHead>
                    <TableHead className="w-[100px] text-sky-600 py-2">Date</TableHead>
                    <TableHead className="text-sky-600 py-2">Total</TableHead>
                    <TableHead className="text-right text-sky-600 py-2">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.length > 0 ? (
                    orders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell className="font-medium">
                          {new Date(order.paymentDate).toLocaleDateString()}
                        </TableCell>
                        <TableCell>{order.total}</TableCell>
                        <TableCell
                          className={`text-right font-medium ${
                            order.paymentStatus === 'PENDING'
                              ? 'text-yellow-500'
                              : 'text-green-600'
                          }`}
                        >
                          {order.paymentStatus}
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center py-5">
                        <p className="text-lg font-medium text-gray-600">
                          No orders found.
                        </p>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default ManageOrder;