/* eslint-disable @typescript-eslint/no-explicit-any */
import { renderHook, act } from '@testing-library/react';
import useFetch from '../hooks/useFetch';
import { JSDOM } from 'jsdom';

const { window } = new JSDOM();
global.window = window as any;
global.document = window.document;

describe('test useFetch hook', () => {
  it('should return loading state', async () => {
    const { result } = renderHook(() =>
      useFetch('http://localhost:3001/pizza')
    );
    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBe(null);
  });

  it('should return data', async () => {
    const { result } = renderHook(() =>
      useFetch('http://localhost:3001/pizza')
    );
    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBe(null);

    while (result.current.loading) {
      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 100));
      });
    }

    expect(result.current.loading).toBe(false);
    expect(result.current.data).not.toBe(null);
  }, 30000);
});
