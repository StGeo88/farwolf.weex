package com.farwolf.weex.module;

import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.common.WXModule;

import java.util.HashMap;

/**
 * Created by zhengjiangrong on 2017/6/6.
 */

public class WXStaticModule extends WXModule {


    static HashMap<String,Object> m=new HashMap<>();


    @JSMethod
    public Object get(String key)
    {
          return m.get(key);
    }

    @JSMethod
    public void set(String key,Object value)
    {
       m.put(key,value);
    }


}
