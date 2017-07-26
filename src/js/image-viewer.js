$(document)
    .ready(function() {
        /******************************
         * STATIC VARIABLES
         ******************************/
        let PREVIEW_IMAGE = $('.current-image img'),
            GALLERY = $('#image-viewer'),
            VERTICAL = GALLERY.hasClass('vertical');

        /******************************
         * ADJUST BUTTONS
         ******************************/
        let prev = GALLERY.find('#prev-btn i'),
            next = GALLERY.find('#next-btn i')

        if (GALLERY.hasClass('vertical')) {
            prev.addClass('fa-chevron-up')
            next.addClass('fa-chevron-down')
        } else if (GALLERY.hasClass('horizontal')) {
            prev.addClass('fa-chevron-left')
            next.addClass('fa-chevron-right')
        }

        /******************************
         * EVENT LISTENERS
         ******************************/
        GALLERY.find('.thumb')
            .on('click', function() {
                loadClickedImage($(this)
                    .data('thumb-id'));
            });
        GALLERY.find('#prev-btn')
            .on('click', function(e) {
                e.preventDefault();
                slide(false);
            });
        GALLERY.find('#next-btn')
            .on('click', function(e) {
                e.preventDefault();
                slide(true);
            });
        $(document)
            .keydown(function(e) {
                switch (e.keyCode) {
                    case 37:
                        //Left arrow press
                        if (!VERTICAL) {
                            e.preventDefault()
                            slide(false);
                        }
                        break;
                    case 38:
                        // Up arrow press
                        if (VERTICAL) {
                            e.preventDefault()
                            slide(false);
                        }
                        break;
                    case 39:
                        //Rigth arrow press
                        if (!VERTICAL) {
                            e.preventDefault()
                            slide(true)
                        }
                        break;
                    case 40:
                        // Down arrow press
                        if (VERTICAL) {
                            e.preventDefault()
                            slide(true);
                        }
                        break;
                    default:
                        break;
                }
            });

        /******************************
         * GALLERY FUNCTIONS
         ******************************/
        let slide = function(next = true) {

            let active = GALLERY.find('.thumb.active');
            if (active.length === 0) {
                active = GALLERY.find('.thumb:last');
            }

            // Setting next image & thumb properties
            if (next)
                loadNextImage(active);
            else
                loadPrevImage(active);
        };

        let loadNextImage = function(active) {
            let next = active.next(".thumb")
                .length ? active.next(".thumb") : GALLERY.find('.thumb:first'),
                nextThumb = GALLERY.find('[data-thumb-id="' + next.data('thumb-id') + '"]'),
                image = nextThumb.find('img')
                .attr('src').replace('-thumb', '');

            // Setting next image & thumb properties
            GALLERY.find('.thumb')
                .removeClass('active');
            PREVIEW_IMAGE.attr('src', image);
            nextThumb.addClass('active');

            // Transitioning to next image & thumbnail
            scrollThumbnails(nextThumb);
        };

        let loadPrevImage = function(active) {
            let prev = active.prev(".thumb")
                .length ? active.prev(".thumb") : GALLERY.find('.thumb:last'),
                prevThumb = GALLERY.find('[data-thumb-id="' + prev.data('thumb-id') + '"]'),
                image = prevThumb.find('img')
                .attr('src').replace('-thumb', '');

            // Setting next image & thumb properties
            GALLERY.find('.thumb')
                .removeClass('active');
            PREVIEW_IMAGE.attr('src', image);
            prevThumb.addClass('active');

            // Transitioning to next image & thumbnail
            scrollThumbnails(prevThumb);
        };

        let loadClickedImage = function(id) {
            let imgThumb = GALLERY.find('[data-thumb-id="' + id + '"]'),
                image = imgThumb.find('img')
                .attr('src').replace('-thumb', ''),
                currActive = GALLERY.find('.thumb.active');

            // Setting image & thumb properties
            GALLERY.find('.thumb')
                .removeClass('active');
            PREVIEW_IMAGE.attr('src', image);
            currActive.addClass('last-active')
                .removeClass('active');
            imgThumb.addClass('active');

            // Transitioning to image & thumbnail
            scrollThumbnails(imgThumb);
        };

        let scrollThumbnails = function(thumb) {
            let offset, // used for thumbnail offset
                first, // stores first thumbnail object
                currOffset,
                y = thumb.position().top + parseInt(thumb.css('margin-top'), 10),
                x = thumb.position().left + parseInt(thumb.css('margin-left'), 10);

            if (VERTICAL) {
                currOffset = (y + thumb.height() + 15) - thumb.parent()
                    .height();
            } else if (!VERTICAL) {
                currOffset = (x + thumb.width() + 15) - thumb.parent()
                    .width();
            }

            if (y < 0) {
                first = GALLERY.find('.thumb:first');
                if (VERTICAL) {
                    offset = parseInt(first.css('margin-top'), 10) - y;
                    first.animate({
                        marginTop: offset
                    }, 100);
                } else if (!VERTICAL) {
                    offset = parseInt(first.css('margin-left'), 10) - x;
                    first.animate({
                        marginLeft: offset
                    }, 100);
                }
            } else {
                if (currOffset > 0) {
                    first = GALLERY.find('.thumb:first');
                    if (VERTICAL) {
                        offset = parseInt(first.css('margin-top'), 10) - currOffset;
                        first.animate({
                            marginTop: offset
                        }, 100)
                    } else if (!VERTICAL) {
                        offset = parseInt(first.css('margin-left'), 10) - currOffset;
                        first.animate({
                            marginLeft: offset
                        }, 100)
                    }
                }
            }
        };
    });
