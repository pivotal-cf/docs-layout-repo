var CFDocs = {};
Elemental.addNamespace(CFDocs);

CFDocs.toggleDuration = 400;

CFDocs.HasSubMenu = function(topDisclosure) {
    var currentUrl = window.location.pathname,
        disclosureClass = 'hasSubMenuClosed',
        openedDisclosureClass = 'hasSubMenuOpened',
        allSubnavs = $(topDisclosure).parent().find('ul'),
        allSubnavDisclosures = allSubnavs.find('.' + disclosureClass),
        activeLink = $(topDisclosure).parent().find('a[href="' + currentUrl + '"]'),
        activeNav = activeLink.parent().siblings('ul'),
        ancestralNavs = activeLink.parentsUntil(topDisclosure, 'ul'),
        ancestralDisclosures = activeLink.parentsUntil(topDisclosure, 'li').find('>.' + disclosureClass),
        topNav = $(topDisclosure).siblings('ul');

    if (activeLink.length) {
        topNav.find('>li>ul>li>ul').hide();

        ancestralDisclosures.add(topDisclosure)
            .addClass(openedDisclosureClass);
        activeNav.add(ancestralNavs).show();
    } else {
        allSubnavs.hide();
    }

    $(topDisclosure).add(allSubnavDisclosures).click(function() {
        var topNav = $(this).siblings('ul');
        $(this).toggleClass(openedDisclosureClass);
        topNav.add(topNav.find('>li>ul'))
            .slideToggle(CFDocs.toggleDuration);
    });
};

// Collapse and expand menu content
// @requires class="collapsible" data-behavior="Collapsible"
CFDocs.Collapsible = function(element) {
    var $el = $(element);
    var $clickableTitle = $el.find('.js-menu-title');

    $clickableTitle.click(function() {
        var $content = $(this).siblings('.js-menu-content');
        var $parent = $(this).parents('.js-menu-item');

        $content.slideToggle();
        $parent.toggleClass('is-clicked');
    });
};

// Show and hide search form
CFDocs.Search = function(element) {
    var $el = $(element);
    $el.click(function() {
        $('.js-searchbar').toggleClass('active');
    });
};

// Submit feedback form
CFDocs.SubmitFeedback = function(element) {
    var $el = $(element);

    $el.submit(function(event){
        // Override form submission
        event.preventDefault();

        // Set hidden values
        $("input[name='date']").val(new Date());
        $("input[name='page_url']").val(document.URL);

        // Send post to our API
        $.post('/api/feedback', $el.serialize()).done(function(){
            $('#feedback').empty().append("<strong>Thanks!</strong><br/>We are constantly working hard to improve our docs. <a href='https://uxresearch.cfapps.io/?context=docs'>Participate in UX Research</a> and help us improve!");
        }).fail(function(){
            $('#feedback').empty().append("<hr>Sorry, the feedback submission failed. Please try again.<hr>");
        });
    });
};


//Anchor scroll hack
(function(document, history, location) {
  var HISTORY_SUPPORT = !!(history && history.pushState);

  var anchorScrolls = {
    ANCHOR_REGEX: /^#[^ ]+$/,
    OFFSET_HEIGHT_PX: 64,

    /**
     * Establish events, and fix initial scroll position if a hash is provided.
     */
    init: function() {
        if ($(window).width() > 700) {
          this.scrollToCurrent();
          window.addEventListener('hashchange', this.scrollToCurrent.bind(this));
          document.body.addEventListener('click', this.delegateAnchors.bind(this));
        }
    },

    /**
     * Return the offset amount to deduct from the normal scroll position.
     * Modify as appropriate to allow for dynamic calculations
     */
    getFixedOffset: function() {
      return this.OFFSET_HEIGHT_PX;
    },

    /**
     * If the provided href is an anchor which resolves to an element on the
     * page, scroll to it.
     * @param  {String} href
     * @return {Boolean} - Was the href an anchor.
     */
    scrollIfAnchor: function(href, pushToHistory) {
      var match, rect, anchorOffset;

      if(!this.ANCHOR_REGEX.test(href)) {
        return false;
      }

      match = document.getElementById(href.slice(1));

      if(match) {
        rect = match.getBoundingClientRect();
        anchorOffset = window.pageYOffset + rect.top - this.getFixedOffset();
        window.scrollTo(window.pageXOffset, anchorOffset);

        // Add the state to history as-per normal anchor links
        if(HISTORY_SUPPORT && pushToHistory) {
          history.pushState({}, document.title, location.pathname + href);
        }
      }

      return !!match;
    },

    /**
     * Attempt to scroll to the current location's hash.
     */
    scrollToCurrent: function() {
      this.scrollIfAnchor(window.location.hash);
    },

    /**
     * If the click event's target was an anchor, fix the scroll position.
     */
    delegateAnchors: function(e) {
      var elem = e.target;

      if(
        elem.nodeName === 'A' &&
        this.scrollIfAnchor(elem.getAttribute('href'), true)
      ) {
        e.preventDefault();
      }
    }
  };

  window.addEventListener(
    'DOMContentLoaded', anchorScrolls.init.bind(anchorScrolls)
  );
})(window.document, window.history, window.location);
