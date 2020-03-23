// Custom Intro Posts Slider
function introPosts( json ) {
	var htmlcode = '<ul class="swiper-wrapper">';
	document.write( htmlcode );
	for ( var i = 0; i < json.feed.entry.length; i++ ) {
		for ( var j = 0; j < json.feed.entry[ i ].link.length; j++ ) {
			if ( json.feed.entry[ i ].link[ j ].rel == 'alternate' ) {
				var postUrl = json.feed.entry[ i ].link[ j ].href;
				break;
			}
		}
		var postTitle = json.feed.entry[ i ].title.$t;
		var postThumbSize = 600;
		var authorImg = " ";
		var postThumb = " ";
		postThumb = postThumb.replace( '/s72-c/', '/s' + postThumbSize + '/' );
		var postCategory = " ";
		var author = json.feed.entry[ i ].author[ 0 ].name.$t;
		var date = json.feed.entry[ i ].published.$t;
		var month = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ];
		var month2 = ["يناير","فبراير","مارس","أبريل","مايو","يونيو"," يوليو"," أغسطس","سبتمبر","أكتوبر","نوفمبر"," ديسمبر"];
		var day = date.split( "-" )[ 2 ].substring( 0, 2 );
		var m = date.split( "-" )[ 1 ];
		var year = date.split( "-" )[ 0 ];
		for ( var u2 = 0; u2 < month.length; u2++ ) {
			if ( parseInt( m ) == month[ u2 ] ) {
				m = month2[ u2 ];
				break;
			}
		}
		date = m + ' ' + day + ', ' + year;
        try {
            postThumb = json.feed.entry[ i ].media$thumbnail.url;
        } catch ( nl ) {
            postThumb = "http://4.bp.blogspot.com/-OI0BoYP677M/VZu1TW7a3DI/AAAAAAAAFsE/4BRdE2YFS5A/s1600/noimg.png";
        }
		try {
			postCategory = json.feed.entry[ i ].category[ 0 ].term;
		} catch ( n ) {
			postCategory = "uncategorized";
		}
        try {
			authorImg = json.feed.entry[i].author[0].gd$image.src;
        } catch ( nl ) {
            authorImg = "http://3.bp.blogspot.com/-fgwrcZWeRrU/V26tvNcGtsI/AAAAAAAAAG4/lGwGnQDZsNY7bAPr8hVorZruD-jHHxxOgCLcB/s50/anonyme.png";
        }
		var item = '<div class="swiper-slide"><div class="item-outer"><div class="intro-thumbnail"><a href="' + postUrl + '" style="background:url(' + postThumb + ') no-repeat center center;background-size: cover"/></div><div class="intro-posts-overlay"><span class="cat"><a class="category" href="/search/label/' + postCategory + '?max-results=6">' + postCategory + '</a><h1 class="intro-posts-title"><a href="' + postUrl + '">' + postTitle + '</a></h1><ul class="intro-posts-meta"><li class="intro-author-img"><img src="' + authorImg + '" /></li><li class="intro-posts-author">' + author + '</li><li class="intro-posts-meta">' + date + '</li></ul></div></div></div>';
		htmlcode += '</ul>';
		document.write( item );
$('.intro-thumbnail a').attr('style', function(i, src) {
	return src.replace('/s72-c', '/s1600');
});
$('.intro-thumbnail a').attr('style', function(i, src) {
	return src.replace('/default.jpg', '/hqdefault.jpg');
});
	}
}

// Custom Favourite posts
function favouritePosts( json ) {
	var htmlcode = '<ul class="swiper-wrapper favourite-posts">';
	document.write( htmlcode );
	for ( var i = 0; i < json.feed.entry.length; i++ ) {
		for ( var j = 0; j < json.feed.entry[ i ].link.length; j++ ) {
			if ( json.feed.entry[ i ].link[ j ].rel == 'alternate' ) {
				var postUrl = json.feed.entry[ i ].link[ j ].href;
				break;
			}
		}
		var postComments = json.feed.entry[ i ].thr$total.$t;
		var postTitle = json.feed.entry[ i ].title.$t;
		var postThumbSize = 600;
		var postThumb = " ";
		postThumb = postThumb.replace( '/s72-c/', '/s' + postThumbSize + '/' );
		var postCategory = " ";
        try {
            postThumb = json.feed.entry[ i ].media$thumbnail.url;
        } catch ( nl ) {
            postThumb = "http://4.bp.blogspot.com/-OI0BoYP677M/VZu1TW7a3DI/AAAAAAAAFsE/4BRdE2YFS5A/s1600/noimg.png";
        }
		try {
			postCategory = json.feed.entry[ i ].category[ 0 ].term;
		} catch ( n ) {
			postCategory = "uncategorized";
		}
		var item = '<div class="swiper-slide favourite-post"><div class="item-outer"><div class="favourite-thumbnail"><a href="' + postUrl + '"><img src="' + postThumb.replace( '/s72-c/', '/s' + 400 + '/' ) + '"/></a></div><a class="favourite-category" href="/search/label/' + postCategory + '?max-results=6">' + postCategory + '</a><div class="favourite-posts-overlay"><h1 class="favourite-posts-title"><a href="' + postUrl + '">' + postTitle + '</a></h1></div></div></div>';
		htmlcode += '</ul>';
		document.write( item );
	}
}
// Custom Related Posts
function relatedPosts( json ) {
	var htmlcode = '<ul class="row">';
	document.write( htmlcode );
	for ( var i = 0; i < json.feed.entry.length; i++ ) {
		for ( var j = 0; j < json.feed.entry[ i ].link.length; j++ ) {
			if ( json.feed.entry[ i ].link[ j ].rel == 'alternate' ) {
				var postUrl = json.feed.entry[ i ].link[ j ].href;
				break;
			}
		}
		var postTitle = json.feed.entry[ i ].title.$t;
		var postThumbSize = 600;
		var postThumb = " ";
		var	postCategory = " ";
		postThumb = postThumb.replace( '/s72-c/', '/s' + postThumbSize + '/' );
        try {
            postThumb = json.feed.entry[ i ].media$thumbnail.url;
        } catch ( nl ) {
            postThumb = "http://4.bp.blogspot.com/-OI0BoYP677M/VZu1TW7a3DI/AAAAAAAAFsE/4BRdE2YFS5A/s1600/noimg.png";
        }
		try {
			postCategory = json.feed.entry[ i ].category[ 0 ].term;
		} catch ( n ) {
			postCategory = "uncategorized";
		}
		var item = '<li class="related-post"><div class="item-outer"><div class="related-thumbnail"><a href="' + postUrl + '"><img src="' + postThumb.replace( '/s72-c/', '/s' + 400 + '/' ) + '"/></a></div><div class="related-posts-overlay"><a class="category" href="/search/label/' + postCategory + '?max-results=6">' + postCategory + '</a><h4 class="related-posts-title"><a href="' + postUrl + '">' + postTitle + '</a></h4></div></div></li>';
		htmlcode += '</ul>';
		document.write( item );
	}
}

