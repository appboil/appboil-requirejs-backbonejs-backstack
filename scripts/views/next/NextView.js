/**
 * Created by Piotr Walczyszyn (outof.me | @pwalczyszyn)
 *
 * User: pwalczys
 * Date: 2/16/12
 * Time: 9:53 AM
 */

define(['underscore', 'BackStack', 'text!views/next/NextViewTemplate.html!strip'],
    function (_, BackStack, NextViewTemplate) {

        var NextView = BackStack.StackView.extend({

            render:function () {
                this.$el.html(_.template(NextViewTemplate));
                return this;
            }

        });

        return NextView;
    });