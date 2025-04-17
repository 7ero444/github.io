<script>
$(document).ready(() => {
  // تعديل محتوى العناصر بإضافة توقيع Hero X Chaet
  const signature = ' by Hero X Chaet <br>';

  $('#r1').html(signature + $('#r1').html());
  $('#r2').html(signature + $('#r2').html());
  $('#r3').html(signature + $('#r3').html());
  $('#r4').html(signature + $('#r4').html());
});

// دالة لتبديل التبويبات بين العناصر
function changeTab(el) {
  // إخفاء جميع العناصر
  $('#r1, #r2, #r3, #r4').hide();

  // عرض العنصر المرتبط بالتبويب المحدد
  const tabId = $(el).attr('tab');
  $('#r' + tabId).show();
}
</script>
