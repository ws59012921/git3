$(function () {

    // 支付：需要集成第三方支付
    // 微信支付，支付宝，银联支付


    //支付
    $('#pay').click(function () {

        //支付完成后，需要将订单状态更改
        $.get('/app/orderchangestatus/', {'orderid': $(this).attr('orderid'), 'status':'1'}, function(data) {
            // console.log(data)
            if (data.status == 1){
                //更改成功后，进入'我的'页面
                location.href = '/app/mine/'
            }
            else {
                console.log(data.msg)
            }
        })

    })

});