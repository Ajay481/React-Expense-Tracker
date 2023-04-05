import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addExpenseList = createAsyncThunk(
  "users/expensePost",
  async (param, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `https://react-ecommerce-14f24-default-rtdb.firebaseio.com/expenses/${param.userId}.json`,
        {
          expense: param.expense,
          description: param.description,
          category: param.category,
        }
      );
      console.log(response.data);
      param.dispatch(param.expenseList(param.userId));
    } catch (error) {
      alert("Expense List fetched unsuccessful");
      return error;
    }
  }
);

export const expenseList = createAsyncThunk(
  "users/expense",
  async (newEmailId) => {
    try {
      const response = await axios.get(
        `https://react-ecommerce-14f24-default-rtdb.firebaseio.com/expenses/${newEmailId}.json`
      );
      console.log(response.data);
      const finalData = [];
      const objKeys = Object.keys(response.data === null ? {} : response.data);
      objKeys.forEach((keys) => {
        const objElement = response.data[keys];
        objElement.id = keys;
        finalData.push(objElement);
      });
      return finalData;
    } catch (error) {
      alert("Expense List fetched unsuccessful");
      return error;
    }
  }
);

export const deleteExpenseList = createAsyncThunk(
  "users/expenseDelete",
  async (param, { rejectWithValue }) => {
    console.log(param);
    try {
      const response = await axios.delete(
        `https://react-ecommerce-14f24-default-rtdb.firebaseio.com/expenses/${param.userId}/${param.id}.json`
      );
      console.log(response.data);
      param.dispatch(param.expenseList(param.userId));
    } catch (error) {
      alert("Expense List fetched unsuccessful");
      return error;
    }
  }
);

export const updateExpenseList = createAsyncThunk(
  "users/expenseUpdate",
  async (param, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `https://react-ecommerce-14f24-default-rtdb.firebaseio.com/expenses/${param.userId}/${param.id}.json`,
        {
          expense: param.expense,
          description: param.description,
          category: param.category,
        }
      );
      console.log(response.data);
      param.dispatch(param.expenseList(param.userId));
    } catch (error) {
      alert("Expense List fetched unsuccessful");
      return error;
    }
  }
);

const initialExpensesState = {
  isLoading: false,
  error: false,
  expenseList: [],
  showPremeium: false,
};

const ExpenseSlice = createSlice({
  name: "Expenses",
  initialState: initialExpensesState,
  extraReducers: (builder) => {
    builder.addCase(expenseList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(expenseList.fulfilled, (state, action) => {
      const total = action.payload.reduce((total, expenses) => {
        return total + Number(expenses.expense);
      }, 0);

      state.isLoading = false;
      state.error = false;
      state.expenseList = action.payload;
      state.showPremeium = total > 10000;
    });
    builder.addCase(expenseList.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });

    builder.addCase(addExpenseList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.expenseList = action.payload;
    });

    builder.addCase(deleteExpenseList.fulfilled, (state) => {
      state.isLoading = false;
      state.error = false;
    });

    builder.addCase(updateExpenseList.fulfilled, (state) => {
      state.isLoading = false;
      state.error = false;
    });
  },
});

export default ExpenseSlice.reducer;
