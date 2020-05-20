import React, { useState,useEffect } from 'react';
export const useRequest = (fn, dependencies) => {
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  
  // 请求的方法 这个方法会自动管理loading
  const request = () => {
    let cancle = false;
    setLoading(true);
    fn()
      .then(res => {
        if(!cancle) {
          setData(res)
        } else {
          // 在请求成功取消后，打印测试文本；
          const { tab } = res;
          console.log(`request with ${tab} canceled!`)
        }
      })
      .catch(() => {
        if(!cancle) {
          setError(error);
        }
      })
      .finally(() => {
        if(!cancle) {
          setLoading(false);
        }
      });
      // 请求的方法返回一个 取消掉这次请求的方法
      return () => {
        cancle = true;
      }
  };

  // 根据传入的依赖项来执行请求
  useEffect(() => {
    const cancelRequest = request();
    return () => {
      cancelRequest();
    };
    // eslint-disable-next-line
  }, dependencies);

  return { data, setData, loading, error, request };
    
};
// 主动请求的封装
export function useWithLoading(fn) {
  const [loading, setLoading] = useState(false);

  const func = (...args) => {
    setLoading(true);
    return fn(...args).finally(() => {
      setLoading(false);
    });
  };

  return { func, loading };
}

