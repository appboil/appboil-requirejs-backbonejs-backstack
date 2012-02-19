/**
 * Created by Piotr Walczyszyn (outof.me | @pwalczyszyn)
 *
 * User: pwalczys
 * Date: 2/16/12
 * Time: 9:50 AM
 */

define(['jquery', 'BackStack', 'views/home/HomeView'],
    function ($, BackStack, HomeView) {
        return {
            init:function () {

                var navigator = new BackStack.StackNavigator({id:'container', firstView:HomeView})
                $('body').html(navigator.render().el);

            }
        };
    });