$(document).ready(function () {
	if (typeof ItemEditing == 'undefined') {
		$('div[class=map]').each(function () {

			var mapId = $(this).attr('id');
			var divValue = $(this).html();
			var divValue = $.trim(divValue);
			var point = divValue.split(',');
			var lat = parseFloat(point[0]);
			var lon = parseFloat(point[1]);
			var zoomSize = parseFloat(point[2]);
			var latlng = new google.maps.LatLng(lat, lon);
			var myOptions = {
				zoom: zoomSize,
				center: latlng,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			var map = new google.maps.Map(document.getElementById(mapId), myOptions);
			var marker = new google.maps.Marker({ position: latlng, map: map });
		});
	}
});