/**
 * Created by Piotr Walczyszyn (outof.me | @pwalczyszyn)
 *
 * User: pwalczys
 * Date: 2/16/12
 * Time: 9:53 AM
 */

define([
    'jquery',
    'underscore',
    'BackStack',
    'views/next/NextView',
    'text!views/home/HomeViewTemplate.html!strip'],
    function ($, _, BackStack, NextView, HomeViewTemplate) {
        var HomeView = BackStack.StackView.extend({

            events:{
                'click #gotoNext':'gotoNext'
            },

            render:function () {
                this.$el.html(_.template(HomeViewTemplate));
                return this;
            },

            gotoNext:function (event) {

                this.stackNavigator.pushView(NextView);

            }
        });

        return HomeView;
    });