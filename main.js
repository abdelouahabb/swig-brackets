define(function (require, exports, module) {
  'use strict';

  var LanguageManager = brackets.getModule("language/LanguageManager");

  LanguageManager.defineLanguage("swig", {
      name: "Swig",
      mode: "django",
      fileExtensions: ["html", "swig"],
      blockComment: ["{#", "#}"],
  });
});
