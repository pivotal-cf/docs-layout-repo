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
}

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

// Show and hide main navigation mobile menu
CFDocs.MenuMobile = function(element) {
    var $el = $(element);
    $el.click(function() {
        $('.js-bar-links').toggleClass('menu-active');
    });
};

// Show and hide side navigation mobile menu
CFDocs.SubMenuMobile = function(element) {
    var $el = $(element);
    $el.click(function() {
        $('.js-sidenav').toggleClass('active');
    });
};
