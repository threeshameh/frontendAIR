<script>
document.addEventListener('DOMContentLoaded', function () {
     tabs = document.querySelectorAll('.tab-btn');
  var contents = document.querySelectorAll('.service-content');

  if (tabs.length === 0 || contents.length === 0) {
    console.warn('Tabs or contents not found:', tabs.length, contents.length);
    return;
  }

  for (var i = 0; i < tabs.length; i++) {
    (function (tab) {
      tab.addEventListener('click', function () {
        for (var j = 0; j < tabs.length; j++) tabs[j].classList.remove('active');
        for (var k = 0; k < contents.length; k++) contents[k].classList.remove('active');

        tab.classList.add('active');

        var id = tab.getAttribute('data-tab');
        var target = document.getElementById(id);
        if (target) target.classList.add('active');
        else console.warn('No content element with id:', id);
      });
    })(tabs[i]);
  }
});
</script>