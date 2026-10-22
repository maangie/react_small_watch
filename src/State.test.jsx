import React from 'react';
import { render, screen, act, cleanup } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import State from './State';

describe('State', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2026, 9, 22, 17, 0, 0));
  });

  afterEach(() => {
    cleanup();
    vi.useRealTimers();
  });

  it('現在時刻を表示する', () => {
    render(<State />);
    const expected = new Date(2026, 9, 22, 17, 0, 0).toLocaleString();
    expect(screen.getByText(`現在時刻は ${expected} です。`)).toBeTruthy();
  });

  it('1 秒ごとに表示を更新する', () => {
    render(<State />);
    act(() => { vi.advanceTimersByTime(1000); });
    const expected = new Date(2026, 9, 22, 17, 0, 1).toLocaleString();
    expect(screen.getByText(`現在時刻は ${expected} です。`)).toBeTruthy();
  });

  it('アンマウント時にタイマーを解除する', () => {
    const { unmount } = render(<State />);
    expect(vi.getTimerCount()).toBe(1);
    unmount();
    expect(vi.getTimerCount()).toBe(0);
  });
});
