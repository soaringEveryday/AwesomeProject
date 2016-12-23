package com.awesomeproject.widget;

import android.content.Context;
import android.util.AttributeSet;
import android.widget.ImageView;

import com.awesomeproject.R;
import com.bumptech.glide.Glide;

/**
 * Created by cht on 2016/12/23.
 */

public class GlideImageView extends ImageView {

    private Context ctx;

    public GlideImageView(Context context) {
        this(context, null);
    }

    public GlideImageView(Context context, AttributeSet attrs) {
        this(context, null, 0);
    }

    public GlideImageView(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        ctx = context;
    }

    public void loadWithUrl(String url){
        Glide.with(ctx).load(url).placeholder(R.drawable.placeholder).into(this);
    }
}
