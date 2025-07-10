const form = document.getElementById('courseForm');
const successMsg = document.getElementById('successMsg');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // এখানে তুমি চাইলে backend request পাঠাতে পারো fetch দিয়ে
  successMsg.textContent = ' কোর্স সফলভাবে আপলোড হয়েছে!';

  // ফর্ম রিসেট
  form.reset();
});
