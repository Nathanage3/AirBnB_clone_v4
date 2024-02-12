/**$("document").ready(function () {
  let amenity_ids = {};
  $('input[type="checkbox"]').change(function () {
    const amenity_id = $(this).data("id");
    const amenity_name = $(this).data("name");

    if ($(this).prop("checked")) {
      amenity_ids[amenity_id] = amenity_name;
    } else {
      delete amenity_ids[amenity_id];
    }
    const amenities_list = Object.values(amenity_ids).join(", ");
    $('.popover h4').text(amenities_list)
  });
});
*/
$document.ready(init);
function init() {
  const amenityObj = {};
  $(".amenities .popover input").change(function () {
    if ($(this).is(":checked")) {
      amenityObj[$(this).attr("data-name")] = $(this).attr("data-id");
    } else if ($(this).is(":not(:checked)")) {
      delete amenityObj[$(this).attr("data-name")];
    }
    const names = Object.keys(amenityObj);
    $(".amenities h4").text(names.sort().join(", "));
  });
}
