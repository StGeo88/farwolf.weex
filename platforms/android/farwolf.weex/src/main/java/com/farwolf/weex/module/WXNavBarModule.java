package com.farwolf.weex.module;

import android.app.Activity;
import android.graphics.Color;
import android.os.Build;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;

import com.farwolf.util.StringUtil;
import com.farwolf.weex.base.WXModuleBase;
import com.farwolf.weex.util.Weex;
import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.bridge.JSCallback;

/**
 * Created by zhengjiangrong on 2017/5/10.
 */

public class WXNavBarModule extends WXModuleBase {



    @JSMethod
    public void setTitle(String title)
    {

         if(getTitleBar()!=null)
         getTitleBar().setTitle(title);
    }

    @JSMethod
    public void setTitleColor(String color)
    {
        if(getTitleBar()!=null)
        getTitleBar().title.setTextColor(Color.parseColor(color));
    }

    @JSMethod
    public void setBack(boolean back,String style)
    {
        if(getTitleBar()==null)
            return;
           if(back)
           {
               getTitleBar().setBack();
               if("black".equals(style))
               {
//
                   getTitleBar().leftimage.setBackgroundResource(com.farwolf.libary.R.drawable.api_black_back_selector);

               }
           }
           else
           {
               getTitleBar().leftview.setVisibility(View.GONE);

           }
    }

    @JSMethod
    public void setStatusBarStyle( String style)
    {
        try {
            if (Build.VERSION.SDK_INT >= 21) {
                Window window = ((Activity)this.mWXSDKInstance.getContext()).getWindow();
                window.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);

                if("black".equals(style))
                {
                    window.setStatusBarColor(Color.BLACK);


                }
                else
                {
                    window.setStatusBarColor(Color.WHITE);
                }


                //底部导航栏
                //window.setNavigationBarColor(activity.getResources().getColor(colorResId));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }



    @JSMethod
    public void hide()
    {
        if(getTitleBar()==null)
            return;
        getTitleBar().setVisibility(View.GONE);
    }


    @JSMethod
    public void show()
    {
        if(getTitleBar()==null)
            return;
        getTitleBar().setVisibility(View.VISIBLE);
    }

    @JSMethod
    public void setBackgroundColor(String color)
    {
        if(getTitleBar()==null)
            return;
        getTitleBar().layout.setBackgroundColor(Color.parseColor(color));
    }

    @JSMethod
    public void setRightText(String text,String color,final JSCallback callback)
    {
        getTitleBar().setRightText(text);
        getTitleBar().setRightTextColor(color);
        getTitleBar().setRightClick(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                callback.invokeAndKeepAlive(null);
            }
        });
    }

    @JSMethod
    public void setLeftText(String text)
    {
        if(getTitleBar()==null)
            return;
        getTitleBar().setLeftText(text);
    }

    @JSMethod
    public void setRightImage(String src,final JSCallback callback)
    {
        if(getTitleBar()==null)
            return;
        getTitleBar().rightview.setVisibility(View.VISIBLE);
        getTitleBar().right_image.setVisibility(View.VISIBLE);
        getTitleBar().setRightClick(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                callback.invokeAndKeepAlive(null);
            }
        });
        src=StringUtil.getRealUrl(this.mWXSDKInstance.getBundleUrl(),src);

        Weex.downloadImg(src, getTitleBar().right_image,this.mWXSDKInstance.getContext());
    }

}
