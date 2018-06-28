$(() => {
  window.print = str => {
    let $outputDiv = $("#output");
    if ($outputDiv.hasClass("void")) {
      $outputDiv.removeClass("void");
      $outputDiv.html("");
    }
    $outputDiv.append(str + "<br>");
  };
  window.clear = _ => {
    let $outputDiv = $("#output");
    $outputDiv.removeClass("void");
    $outputDiv.html("");
  };

  let getInput = n => {
    let value = $(`.form-control[name='input${n}']`).val();
    if ($.isNumeric(value)) return +value;
    return value;
  };

  let fillInputVars = _ => {
    window.input1 = getInput(1);
    window.input2 = getInput(2);
    window.input3 = getInput(3);
    window.input4 = getInput(4);
  };

  $(".btn").on("click", e => {
    e.preventDefault();
    fillInputVars();
    let script = $("#script").val();
    if (script.trim() === "") {
      $(".alert-warning").show();
      setTimeout(() => {
        $(".alert-warning").hide();
      }, 2000);
    } else {
      try {
        eval(script);
        $("#output").scrollTop(9999);
      } catch (e) {
        $(".alert-danger .text").html(e);
        $(".alert-danger").show();
      }
    }
  });

  $(".close").on("click", e => {
    $(".alert").hide();
  });
});
