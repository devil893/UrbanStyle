import { Grid } from '@mui/material';
import React from 'react';
import OrderCard from './OrderCard';

const orderStatus = [
  { lable: "On The Way", value: "on_the_way" },
  { lable: "Delivered", value: "delivered" },
  { lable: "Cancelled", value: "cancelled" },
  { lable: "Returned", value: "returned" },
];

const Order = () => {
  return (
    <div className="p-5">
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <div className="h-auto shadow-lg bg-white p-8 rounded-lg sticky top-5 border border-gray-200">
            <h1 className="font-bold text-lg text-center mb-6">Filter</h1>
            <div className="space-y-6">
              <h1 className="font-semibold text-center">ORDER STATUS</h1>
              {orderStatus.map((option) => (
                <div
                  className="flex items-center justify-between px-4 py-2 bg-gray-50 rounded-md shadow-sm"
                  key={option.value}
                >
                  <input
                    defaultValue={option.value}
                    type="checkbox"
                    className="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    className="ml-3 text-sm text-gray-600 flex-grow"
                    htmlFor={option.value}
                  >
                    {option.lable}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>
        <Grid item xs={8}>
          <OrderCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;