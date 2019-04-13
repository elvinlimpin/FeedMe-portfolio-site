$(document).ready(()=>{
    $("#contract").click(()=>{
      $("#home").hide("slow")
      $("#contractContainer").show("slow")
    })

    $("#research").click(()=>{
      $("#home").hide("slow")
      $("#researchContainer").show("slow")
    })

    $("#loFi").click(()=>{
      $("#home").hide("slow")
      $("#prototypeContainer").show("slow")
    })

    $("#evaluation").click(()=>{
      $("#home").hide("slow")
      $("#evaluationContainer").show("slow")
    })

    $("#report").click(()=>{
      $("#home").hide("slow")
      $("#reportContainer").show("slow")
    })

    $(".return").click(() => {
      $("#home").show("slow")
      $(".pdfContainer").hide("slow")
    })

  $(".pdfContainer").hide()
  $(".return").click()
})

