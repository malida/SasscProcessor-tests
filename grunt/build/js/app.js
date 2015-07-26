(function() {
  var StringConcatenator, arr, concater, print_stuff;

  StringConcatenator = (function() {
    function StringConcatenator(array) {
      this.array = array;
    }

    StringConcatenator.prototype.concat = function() {
      var buf, i, len, ref, s;
      buf = '';
      ref = this.array;
      for (i = 0, len = ref.length; i < len; i++) {
        s = ref[i];
        buf += s;
      }
      return buf;
    };

    return StringConcatenator;

  })();

  arr = ['some', 'other', 'something else', '   arst'];

  concater = new StringConcatenator(arr);

  console.log(concater.concat());

  print_stuff = function() {
    return console.log("stuff");
  };

  print_stuff();

}).call(this);

//# sourceMappingURL=../maps/app.js.map
