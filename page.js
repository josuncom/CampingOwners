var $products = $('#Table');

$products.after('<div id="nav">');


var $tr = $($products).find('tbody tr');
var rowTotals = $tr.length;
rowPerPage = 10;


var pageTotal = Math.ceil(rowTotals/ rowPerPage);
var i = 0;

for (; i < pageTotal; i++) {
	$('<div class="pagination"></div>')
			.attr('rel', i)
			.html(i + 1)
			.appendTo('#nav');
}

$tr.addClass('off-screen')
		.slice(0, rowPerPage)
		.removeClass('off-screen');

var $pagingLink = $('#nav div');

$pagingLink.on('click', function (evt) {
	evt.preventDefault();
	var $this = $(this);
	if ($this.hasClass('active')) {
		return;
	}
	$pagingLink.removeClass('active');
	$this.addClass('active');

	var currPage = $this.attr('rel');
	var startItem = currPage * rowPerPage;
	var endItem = startItem + rowPerPage;

	$tr.css('opacity', '0.0')
			.addClass('off-screen')
			.slice(startItem, endItem)
			.removeClass('off-screen')
			.animate({opacity: 1}, 300);

});

$pagingLink.filter(':first').addClass('active');




