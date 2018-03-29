window.onload = function() {
  const $name = $('#js-name');
  const $address = $('#js-address');
  const $location = $('#js-location');
  const $times = $('#js-times');
  const $days = $('#js-days');
  const $other = $('#js-other');

  $('#submit').on('click', function(event) {
    event.preventDefault();
    const data = {
      name: $name.val(),
      address: $address.val(),
      location: $location.val(),
      times: $times.val(),
      days: $days.val(),
      other: $other.val()
    };
    $.ajax({
      type: 'POST',
      url: '/api',
      data: data,
      success: function(newData) {
        console.log(newData);
      },
      error: function() {
        alert('Something went wrong please try again later.');
      }
    });
  });
};
