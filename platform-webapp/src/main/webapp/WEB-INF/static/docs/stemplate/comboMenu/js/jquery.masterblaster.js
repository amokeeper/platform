/* jquery.masterblaster v.0.0.2
 * A nice and tidy tag manager.
 * by aef
 */
( function( $, window, document, undefined ) {
  var pluginName = "masterblaster",
      name = "plugin_masterblaster",
      defaults = { 
        animate: true,
        triggerKeys: [ 9, 13 ], //keycode when entered adds the tag
        showAddButton: true,
        helpText: "5",
        tagRules: {
          unique: false,
          minLength: null
        }
      },
      methods = [ "push", "pop", "remove", "destroy" ];

  function MasterBlaster( $element, options ) {
    this.options = $.extend( {}, defaults, options );
    this.$container = $( '<div class="mb-container"></div>' );
    this.$tagList = $( '<ul class="mb-taglist"></ul>' );
    this.$meta = $( '<div class="mb-meta input-group input-group-sm"></div>' );
    this.$element = $element;
    this.$oldInput = $element;
    this.$input = $element.clone( );
    if( this.options.showAddButton )
      this.$addButton = $( "<span class='input-group-addon mb-add-button'>添加</span>" );
    this.tag = [ '<li style="opacity:1" data-tag="" class="mb-tag"><div class="mb-tag-content">',
                  '<span class="mb-tag-text"></span>',
                  '<a class="mb-tag-remove"></a>',
                 '</div></li>' ].join( "" );
    this.tags = [ ];
    this.setup( );
  }

  MasterBlaster.prototype.addElem = function( $tag ) {
	  //添加判断逻辑
	 var existTabs=[];
	 var tabs=$(".mb-tag")||[];
	 for(var i=0;i<tabs.length;i++){
		 existTabs.push($(tabs[i]).attr("data-tag"));
	 }
	 if(tabs.length>=5){
		alert("注意：标题最多只能添加五个");
		return false; 
	 }
	 var currentTab=$tag.find(".mb-tag-text").text();
	 var isExist=false;
	 for(var i=0;i<existTabs.length;i++){
		if( currentTab==existTabs[i]){
		    isExist=true;
			break;	
		}
	 }
	 if(isExist){
		alert("注意：标签不能重复！");
		return false; 
	 }
	 
	if( this.options.animate ) {
      $tag.css( "opacity", 0 );
      $tag.insertBefore( this.$meta );
      var width = $tag.css( "width" );
      $tag.css( "width", 0 );
      $tag.animate( {
        width: width
      }, "fast", function( ) {
       $tag.css( "width", "" );
       $tag.animate( { opacity: 1 } ); 
      } );
    }
    else
      $tag.insertBefore( this.$meta );
  };

  MasterBlaster.prototype.buildTag = function( tagName ) {

	  
    var $tag = $( this.tag );
    $tag.find( ".mb-tag-text" ).text( tagName );
    $tag.attr( "data-tag", tagName );

    return $tag;
  };

  MasterBlaster.prototype.removeEvents = function( ) {
    this.$input.on( "keydown", $.proxy( this.onRemove, this ) );
    if( this.options.showAddButton )
      this.$addButton.on( "click", $.proxy( this.onRemove, this ) );
  };

  MasterBlaster.prototype.addEvents = function( ) {
    this.$input.on( "keydown", $.proxy( this.onAdd, this ) );
    if( this.options.showAddButton )
      this.$addButton.on( "click", $.proxy( this.onAdd, this ) );
  };
  
  MasterBlaster.prototype.onAdd = function( e ) {
    if( e.type === "click" || ~this.options.triggerKeys.indexOf( e.keyCode || e.which ) ) {
      e.preventDefault(); 
      var tagName = this.cleanTag( this.$input.val( ) );
      if( this.isValid( tagName ) ) {
        this.$container.removeClass( "mb-error" );
        this.push( tagName );
        this.$input.val( "" );
      }
      else {
        this.$container.addClass( "mb-error" );
        this.$element.trigger( "mb:error", tagName, this.error );
      }
    }
  };                                                             
 
  MasterBlaster.prototype.cleanTag = function( tagName ) {
    return tagName;
  };

  MasterBlaster.prototype.isValid = function( tagName ) {
    if( this.options.tagRules.unique && this.hasTag( tagName ) ) {
      this.error = tagName + " already exists.";
      return false;
    }
    else if( this.options.tagRules.minLength && tagName.length < this.options.tagRules.minLength ) {
      this.error = tagName + " must be greater than " + this.options.tagRules.minLength + " characters.";
      return false;
    }
    else {
      return true;
    }
  };

  MasterBlaster.prototype.refreshTagEvents = function( ) {
    this.$tagList.find( ".mb-tag-remove" ).off( "click" );
    this.$tagList.find( ".mb-tag-remove" ).on( "click", $.proxy( this.onRemove, this ) );
  };

  MasterBlaster.prototype.onRemove = function( e ) {
    e.preventDefault( );
    this.remove( $( e.target ).parents( ".mb-tag" ).attr( "data-tag" ) );
  };
 
  MasterBlaster.prototype.removeElem = function( tagName ) {
    var $tag = this.$tagList.find( "[data-tag='"+tagName+"']" );
    if( this.options.animate ) {
      $tag.animate( { opacity: 0.01 }, "fast", function( ) {
        $tag.animate( { width: 0, margin: 0 }, "fast", function( ) {
          $tag.remove( );
        } );
      } );
    }
    else
      $tag.remove( ); 
  };

  MasterBlaster.prototype.hasTag = function( tagName ) {
    return ~( this.tags.indexOf( tagName ) ); 
  };

  MasterBlaster.prototype.push = function( tagName ) {
    this.tags.push( tagName );
    ;

    this.addElem( this.buildTag( tagName ) );
    this.refreshTagEvents( );

    this.$element.trigger( "mb:add", tagName );
  };

  MasterBlaster.prototype.pop = function( ) {
    var tagName = this.tags[ this.tags.length - 1 ];
    this.remove( tagName );
  };

  MasterBlaster.prototype.removeFromTagsArray = function( tagName ) {
    var index = this.tags.indexOf( tagName );
    if( !~index ) return false;
    this.tags.splice( index, 1 );
    return true;
  };

  MasterBlaster.prototype.remove = function( tagName ) {
    this.removeElem( tagName );
    while( this.removeFromTagsArray( tagName ) );
    this.$element.trigger( "mb:remove", tagName );
  };

  MasterBlaster.prototype.destroy = function( ) {
    this.$oldInput.show( );
    this.removeEvents( );
    this.$container.remove( );
    this.$element.removeData( name );
  };

  MasterBlaster.prototype.setup = function( ) {
    this.$container.insertAfter( this.$oldInput );
    this.$oldInput.hide( );
    this.$input.attr( "id", "" ).addClass( "mb-input" );
    this.$container.append( this.$tagList.append( this.$meta ) );
    this.$meta.append( this.$input );
    if( this.options.showAddButton )
      this.$input.after( this.$addButton );
    if( this.options.helpText )
      this.$meta.append( $( "<span class='mb-help-text'><small>（你最多可以添加"+this.options.helpText+"标签）</small></span>" ) );

    this.addEvents( );
  };
  
  $.fn[ pluginName ] = function( optionsOrMethod ) {
    var $this,
        _arguments = Array.prototype.slice.call( arguments ),
        optionsOrMethod = optionsOrMethod || { };

    return this.each(function ( ) {
      $this = $( this );
      if( !$this.data( name ) && ( typeof optionsOrMethod ).toLowerCase( ) === "object" ) 
        $this.data( name, new MasterBlaster( $this, optionsOrMethod ) );
      else if( ( typeof optionsOrMethod ).toLowerCase( ) === "string" ) {
        if( ~$.inArray( optionsOrMethod, methods ) )
          $this.data( name )[ optionsOrMethod ].apply( $this.data( name ), _arguments.slice( 1, _arguments.length ) );
        else
          throw new Error( "Method " + optionsOrMethod + " does not exist. Did you instantiate masterblaster?" );
      }
    } );
  }; 
} )( jQuery, window, document );
