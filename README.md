## Web shop Image Viewer
**Webshop-imge-viewer** is a JavaScript plugin for creating an image viewer like in a web shop with thumbnails strip and keyboard control.

#### Setup
The repository is using gulp for building the project (minify the JavaScript and compile the SCSS), but the plugin can be used without it.
Requirements:
1. Jquery
2. Bootstrap

All you need is the `image-viewer.scss, image-viewer.js` and correct HTML template.

#### Example
![Vertical](http://i.imgur.com/1RMvlzL.png "Vertical example")

![Horizontal](http://i.imgur.com/CN8WIgS.png "Horizontal example")


```
<div class="container horizontal" id="image-viewer">
    <div class="thumbnail-strip">
        <a href="#" id="prev-btn">
            <i class="fa fa-2x"></i>
        </a>

        <ul class="thumbnail-list">
            <li class="thumbnail thumb active" data-thumb-id="1">
                <img src="/img/img1-thumb.jpg" alt="Image 1 Thumbnail">
            </li>
            <li class="thumbnail thumb" data-thumb-id="2">
                <img src="/img/img2-thumb.jpg" alt="Image 2 Thumbnail">
            </li>
            <li class="thumbnail thumb" data-thumb-id="3">
                <img src="/img/img3-thumb.jpg" alt="Image 3 Thumbnail">
            </li>
        </ul>

        <a href="#" id="next-btn">
            <i class="fa fa-2x"></i>
        </a>
    </div>
    <div class="current-image">
        <img src="/img/img1.jpg" class="img-responsive" alt="Image preview">
    </div>
</div>
```
#### Things to be aware:  
1. Classes and ID's are used both in the styling and JavaScript functionality.
2. The container requires a class *horizontal* or *vertical*
3. Images needs to be named `image-name` and the thumbnails `image-name-thumb`

#### Bugs
* Right now the plugin is not really responsive, all help is appreciated.
 * One little fix is to resize the images to be the same size.
 * All help is appreciated
