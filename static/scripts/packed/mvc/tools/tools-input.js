define([],function(){return Backbone.View.extend({initialize:function(d,c){this.app=d;this.text_enable=d.options.text_enable||"Enable";this.text_disable=d.options.text_disable||"Disable";this.field=c.field;this.default_value=c.default_value;this.setElement(this._template(c));this.$field=this.$el.find(".ui-table-form-field");this.$title_optional=this.$el.find(".ui-table-form-title-optional");this.$error_text=this.$el.find(".ui-table-form-error-text");this.$error=this.$el.find(".ui-table-form-error");this.$field.prepend(this.field.$el);this.field.skip=false;var b=this.field.value&&this.field.value();this.field.skip=Boolean(c.optional&&((this.default_value===undefined)||((this.field.validate&&!this.field.validate())||!b||(b==this.default_value)||(Number(b)==Number(this.default_value))||(JSON.stringify(b)==JSON.stringify(this.default_value)))));this._refresh();var a=this;this.$title_optional.on("click",function(){a.field.skip=!a.field.skip;a._refresh()})},error:function(a){this.$error_text.html(a);this.$error.show();this.$el.addClass("ui-error")},reset:function(){this.$error.hide();this.$el.removeClass("ui-error")},_refresh:function(){if(!this.field.skip){this.$field.fadeIn("fast");this.$title_optional.html(this.text_disable)}else{this.reset();this.$field.hide();this.$title_optional.html(this.text_enable);this.field.value&&this.field.value(this.default_value)}this.app.trigger("refresh")},_template:function(a){var b='<div class="ui-table-form-element"><div class="ui-table-form-error ui-error"><span class="fa fa-arrow-down"/><span class="ui-table-form-error-text"/></div><div class="ui-table-form-title-strong">';if(a.optional){b+=a.label+'<span>&nbsp[<span class="ui-table-form-title-optional"/>]</span>'}else{b+=a.label}b+='</div><div class="ui-table-form-field">';if(a.help){b+='<div class="ui-table-form-info">'+a.help+"</div>"}b+="</div></div>";return b}})});