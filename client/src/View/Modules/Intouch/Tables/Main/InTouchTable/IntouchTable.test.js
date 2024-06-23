import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { toast } from 'react-toastify';
import InTouchTable from './InTouchTable';
import { getShiftScheduling, deleteShiftSchedulingData } from '../../../../../../features/intouch/intouchSlice';

// Mock toast notifications
jest.mock('react-toastify', () => ({
  toast: {
    error: jest.fn(),
  },
}));

// Create a mock store
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {
  auth: {
    isError: false,
    isSuccess: true,
    user: { success: true },
  },
  shiftScheduling: {
    ShiftScheduling: [],
    isError: false,
    message: '',
    isLoading: false,
    isSuccess: true,
    isDelSuccess: false,
  },
};

const renderWithProviders = (ui, { store = mockStore(initialState) } = {}) => {
  return render(
    <Provider store={store}>
      <Router>{ui}</Router>
    </Provider>
  );
};

test('renders InTouchTable and handles loading state', async () => {
  const store = mockStore(initialState);
  store.dispatch = jest.fn();

  renderWithProviders(<InTouchTable />, { store });

  // Check if the title is set correctly
  expect(document.title).toBe('Shift Scheduling Table');

  // Check if the spinner is displayed when loading
  store.dispatch({ type: 'shiftScheduling/getShiftScheduling/pending' });
  renderWithProviders(<InTouchTable />, { store });
  expect(screen.getByRole('status')).toBeInTheDocument();

  // Check if the table headers are displayed
  const headers = ['Shift Type', "Doctor's Name", 'Week Day', "Total Patient's", 'Fee', 'Assigned Branch', 'Department'];
  headers.forEach(header => {
    expect(screen.getByText(header)).toBeInTheDocument();
  });

  // Check if the "No Data Available" message is displayed
  store.dispatch({ type: 'shiftScheduling/getShiftScheduling/fulfilled', payload: [] });
  renderWithProviders(<InTouchTable />, { store });
  expect(screen.getByText('No Data Available')).toBeInTheDocument();

  // Simulate a successful data fetch
  const shiftSchedulingData = [
    {
      _id: '1',
      shiftScheduling_type: 'Morning',
      shiftScheduling_doctor_name: 'Dr. Smith',
      shiftScheduling_week_day: 'Monday',
      shiftScheduling_total_patients: 10,
      shiftScheduling_total_amount: 500,
      shiftScheduling_assigned_branch: 'Branch A',
      shiftScheduling_dept: 'Cardiology',
    },
  ];

  store.dispatch({ type: 'shiftScheduling/getShiftScheduling/fulfilled', payload: shiftSchedulingData });
  renderWithProviders(<InTouchTable />, { store });

  await waitFor(() => {
    expect(screen.getByText('Night')).toBeInTheDocument();
    expect(screen.getByText('Dr. Faruukh')).toBeInTheDocument();
    expect(screen.getByText('Friday')).toBeInTheDocument();
    expect(screen.getByText('23')).toBeInTheDocument();
    expect(screen.getByText('500')).toBeInTheDocument();
    expect(screen.getByText('Clifton Branch')).toBeInTheDocument();
    expect(screen.getByText('Neurology Branch')).toBeInTheDocument();
  });

  // Check if the delete button works
  const deleteButton = screen.getByText(/Delete/i);
  fireEvent.click(deleteButton);
  await waitFor(() => {
    expect(store.dispatch).toHaveBeenCalledWith(deleteShiftSchedulingData('1'));
  });

  // Check if the edit button works
  const editButton = screen.getByText(/Edit/i);
  fireEvent.click(editButton);
  await waitFor(() => {
    expect(store.dispatch).toHaveBeenCalledWith({ type: 'shiftScheduling/resetShiftScheduling' });
  });
});

test('displays error message when there is an error', () => {
  const errorState = {
    ...initialState,
    shiftScheduling: {
      ...initialState.shiftScheduling,
      isError: true,
      message: 'Error fetching data',
    },
  };

  renderWithProviders(<InTouchTable />, { store: mockStore(errorState) });

  expect(screen.getByText('Error fetching data')).toBeInTheDocument();
});
