/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/metronic/js/pages/crud/forms/widgets/input-mask.js":
/*!**********************************************************************!*\
  !*** ./resources/metronic/js/pages/crud/forms/widgets/input-mask.js ***!
  \**********************************************************************/
/***/ (() => {

eval("// Class definition\nvar KTInputmask = function () {\n  // Private functions\n  var demos = function demos() {\n    // date format\n    $(\"#kt_inputmask_1\").inputmask(\"99/99/9999\", {\n      \"placeholder\": \"mm/dd/yyyy\",\n      autoUnmask: true\n    }); // custom placeholder        \n\n    $(\"#kt_inputmask_2\").inputmask(\"99/99/9999\", {\n      \"placeholder\": \"mm/dd/yyyy\"\n    }); // phone number format\n\n    $(\"#kt_inputmask_3\").inputmask(\"mask\", {\n      \"mask\": \"(999) 999-9999\"\n    }); // empty placeholder\n\n    $(\"#kt_inputmask_4\").inputmask({\n      \"mask\": \"99-9999999\",\n      placeholder: \"\" // remove underscores from the input mask\n\n    }); // repeating mask\n\n    $(\"#kt_inputmask_5\").inputmask({\n      \"mask\": \"9\",\n      \"repeat\": 10,\n      \"greedy\": false\n    }); // ~ mask \"9\" or mask \"99\" or ... mask \"9999999999\"\n    // decimal format\n\n    $(\"#kt_inputmask_6\").inputmask('decimal', {\n      rightAlignNumerics: false\n    }); // currency format\n\n    $(\"#kt_inputmask_7\").inputmask('€ 999.999.999,99', {\n      numericInput: true\n    }); //123456  =>  € ___.__1.234,56\n    //ip address\n\n    $(\"#kt_inputmask_8\").inputmask({\n      \"mask\": \"999.999.999.999\"\n    }); //email address\n\n    $(\"#kt_inputmask_9\").inputmask({\n      mask: \"*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]\",\n      greedy: false,\n      onBeforePaste: function onBeforePaste(pastedValue, opts) {\n        pastedValue = pastedValue.toLowerCase();\n        return pastedValue.replace(\"mailto:\", \"\");\n      },\n      definitions: {\n        '*': {\n          validator: \"[0-9A-Za-z!#$%&'*+/=?^_`{|}~\\-]\",\n          cardinality: 1,\n          casing: \"lower\"\n        }\n      }\n    });\n  };\n\n  return {\n    // public functions\n    init: function init() {\n      demos();\n    }\n  };\n}();\n\njQuery(document).ready(function () {\n  KTInputmask.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvbWV0cm9uaWMvanMvcGFnZXMvY3J1ZC9mb3Jtcy93aWRnZXRzL2lucHV0LW1hc2suanM/Y2FlZCJdLCJuYW1lcyI6WyJLVElucHV0bWFzayIsImRlbW9zIiwiJCIsImlucHV0bWFzayIsImF1dG9Vbm1hc2siLCJwbGFjZWhvbGRlciIsInJpZ2h0QWxpZ25OdW1lcmljcyIsIm51bWVyaWNJbnB1dCIsIm1hc2siLCJncmVlZHkiLCJvbkJlZm9yZVBhc3RlIiwicGFzdGVkVmFsdWUiLCJvcHRzIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwiZGVmaW5pdGlvbnMiLCJ2YWxpZGF0b3IiLCJjYXJkaW5hbGl0eSIsImNhc2luZyIsImluaXQiLCJqUXVlcnkiLCJkb2N1bWVudCIsInJlYWR5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUVBLElBQUlBLFdBQVcsR0FBRyxZQUFZO0FBRTFCO0FBQ0EsTUFBSUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBWTtBQUNwQjtBQUNBQyxJQUFBQSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQkMsU0FBckIsQ0FBK0IsWUFBL0IsRUFBNkM7QUFDekMscUJBQWUsWUFEMEI7QUFFekNDLE1BQUFBLFVBQVUsRUFBRTtBQUY2QixLQUE3QyxFQUZvQixDQU9wQjs7QUFDQUYsSUFBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJDLFNBQXJCLENBQStCLFlBQS9CLEVBQTZDO0FBQ3pDLHFCQUFlO0FBRDBCLEtBQTdDLEVBUm9CLENBWXBCOztBQUNBRCxJQUFBQSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQkMsU0FBckIsQ0FBK0IsTUFBL0IsRUFBdUM7QUFDbkMsY0FBUTtBQUQyQixLQUF2QyxFQWJvQixDQWlCcEI7O0FBQ0FELElBQUFBLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCQyxTQUFyQixDQUErQjtBQUMzQixjQUFRLFlBRG1CO0FBRTNCRSxNQUFBQSxXQUFXLEVBQUUsRUFGYyxDQUVYOztBQUZXLEtBQS9CLEVBbEJvQixDQXVCcEI7O0FBQ0FILElBQUFBLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCQyxTQUFyQixDQUErQjtBQUMzQixjQUFRLEdBRG1CO0FBRTNCLGdCQUFVLEVBRmlCO0FBRzNCLGdCQUFVO0FBSGlCLEtBQS9CLEVBeEJvQixDQTRCaEI7QUFFSjs7QUFDQUQsSUFBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJDLFNBQXJCLENBQStCLFNBQS9CLEVBQTBDO0FBQ3RDRyxNQUFBQSxrQkFBa0IsRUFBRTtBQURrQixLQUExQyxFQS9Cb0IsQ0FtQ3BCOztBQUNBSixJQUFBQSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQkMsU0FBckIsQ0FBK0Isa0JBQS9CLEVBQW1EO0FBQy9DSSxNQUFBQSxZQUFZLEVBQUU7QUFEaUMsS0FBbkQsRUFwQ29CLENBc0NoQjtBQUVKOztBQUNBTCxJQUFBQSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQkMsU0FBckIsQ0FBK0I7QUFDM0IsY0FBUTtBQURtQixLQUEvQixFQXpDb0IsQ0E2Q3BCOztBQUNBRCxJQUFBQSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQkMsU0FBckIsQ0FBK0I7QUFDM0JLLE1BQUFBLElBQUksRUFBRSxpRUFEcUI7QUFFM0JDLE1BQUFBLE1BQU0sRUFBRSxLQUZtQjtBQUczQkMsTUFBQUEsYUFBYSxFQUFFLHVCQUFVQyxXQUFWLEVBQXVCQyxJQUF2QixFQUE2QjtBQUN4Q0QsUUFBQUEsV0FBVyxHQUFHQSxXQUFXLENBQUNFLFdBQVosRUFBZDtBQUNBLGVBQU9GLFdBQVcsQ0FBQ0csT0FBWixDQUFvQixTQUFwQixFQUErQixFQUEvQixDQUFQO0FBQ0gsT0FOMEI7QUFPM0JDLE1BQUFBLFdBQVcsRUFBRTtBQUNULGFBQUs7QUFDREMsVUFBQUEsU0FBUyxFQUFFLGlDQURWO0FBRURDLFVBQUFBLFdBQVcsRUFBRSxDQUZaO0FBR0RDLFVBQUFBLE1BQU0sRUFBRTtBQUhQO0FBREk7QUFQYyxLQUEvQjtBQWVILEdBN0REOztBQStEQSxTQUFPO0FBQ0g7QUFDQUMsSUFBQUEsSUFBSSxFQUFFLGdCQUFXO0FBQ2JsQixNQUFBQSxLQUFLO0FBQ1I7QUFKRSxHQUFQO0FBTUgsQ0F4RWlCLEVBQWxCOztBQTBFQW1CLE1BQU0sQ0FBQ0MsUUFBRCxDQUFOLENBQWlCQyxLQUFqQixDQUF1QixZQUFXO0FBQzlCdEIsRUFBQUEsV0FBVyxDQUFDbUIsSUFBWjtBQUNILENBRkQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDbGFzcyBkZWZpbml0aW9uXHJcblxyXG52YXIgS1RJbnB1dG1hc2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBcclxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXHJcbiAgICB2YXIgZGVtb3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gZGF0ZSBmb3JtYXRcclxuICAgICAgICAkKFwiI2t0X2lucHV0bWFza18xXCIpLmlucHV0bWFzayhcIjk5Lzk5Lzk5OTlcIiwge1xyXG4gICAgICAgICAgICBcInBsYWNlaG9sZGVyXCI6IFwibW0vZGQveXl5eVwiLFxyXG4gICAgICAgICAgICBhdXRvVW5tYXNrOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGN1c3RvbSBwbGFjZWhvbGRlciAgICAgICAgXHJcbiAgICAgICAgJChcIiNrdF9pbnB1dG1hc2tfMlwiKS5pbnB1dG1hc2soXCI5OS85OS85OTk5XCIsIHtcclxuICAgICAgICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIm1tL2RkL3l5eXlcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBwaG9uZSBudW1iZXIgZm9ybWF0XHJcbiAgICAgICAgJChcIiNrdF9pbnB1dG1hc2tfM1wiKS5pbnB1dG1hc2soXCJtYXNrXCIsIHtcclxuICAgICAgICAgICAgXCJtYXNrXCI6IFwiKDk5OSkgOTk5LTk5OTlcIlxyXG4gICAgICAgIH0pOyBcclxuXHJcbiAgICAgICAgLy8gZW1wdHkgcGxhY2Vob2xkZXJcclxuICAgICAgICAkKFwiI2t0X2lucHV0bWFza180XCIpLmlucHV0bWFzayh7XHJcbiAgICAgICAgICAgIFwibWFza1wiOiBcIjk5LTk5OTk5OTlcIixcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiXCIgLy8gcmVtb3ZlIHVuZGVyc2NvcmVzIGZyb20gdGhlIGlucHV0IG1hc2tcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gcmVwZWF0aW5nIG1hc2tcclxuICAgICAgICAkKFwiI2t0X2lucHV0bWFza181XCIpLmlucHV0bWFzayh7XHJcbiAgICAgICAgICAgIFwibWFza1wiOiBcIjlcIixcclxuICAgICAgICAgICAgXCJyZXBlYXRcIjogMTAsXHJcbiAgICAgICAgICAgIFwiZ3JlZWR5XCI6IGZhbHNlXHJcbiAgICAgICAgfSk7IC8vIH4gbWFzayBcIjlcIiBvciBtYXNrIFwiOTlcIiBvciAuLi4gbWFzayBcIjk5OTk5OTk5OTlcIlxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGRlY2ltYWwgZm9ybWF0XHJcbiAgICAgICAgJChcIiNrdF9pbnB1dG1hc2tfNlwiKS5pbnB1dG1hc2soJ2RlY2ltYWwnLCB7XHJcbiAgICAgICAgICAgIHJpZ2h0QWxpZ25OdW1lcmljczogZmFsc2VcclxuICAgICAgICB9KTsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gY3VycmVuY3kgZm9ybWF0XHJcbiAgICAgICAgJChcIiNrdF9pbnB1dG1hc2tfN1wiKS5pbnB1dG1hc2soJ+KCrCA5OTkuOTk5Ljk5OSw5OScsIHtcclxuICAgICAgICAgICAgbnVtZXJpY0lucHV0OiB0cnVlXHJcbiAgICAgICAgfSk7IC8vMTIzNDU2ICA9PiAg4oKsIF9fXy5fXzEuMjM0LDU2XHJcblxyXG4gICAgICAgIC8vaXAgYWRkcmVzc1xyXG4gICAgICAgICQoXCIja3RfaW5wdXRtYXNrXzhcIikuaW5wdXRtYXNrKHtcclxuICAgICAgICAgICAgXCJtYXNrXCI6IFwiOTk5Ljk5OS45OTkuOTk5XCJcclxuICAgICAgICB9KTsgIFxyXG5cclxuICAgICAgICAvL2VtYWlsIGFkZHJlc3NcclxuICAgICAgICAkKFwiI2t0X2lucHV0bWFza185XCIpLmlucHV0bWFzayh7XHJcbiAgICAgICAgICAgIG1hc2s6IFwiKnsxLDIwfVsuKnsxLDIwfV1bLip7MSwyMH1dWy4qezEsMjB9XUAqezEsMjB9Wy4qezIsNn1dWy4qezEsMn1dXCIsXHJcbiAgICAgICAgICAgIGdyZWVkeTogZmFsc2UsXHJcbiAgICAgICAgICAgIG9uQmVmb3JlUGFzdGU6IGZ1bmN0aW9uIChwYXN0ZWRWYWx1ZSwgb3B0cykge1xyXG4gICAgICAgICAgICAgICAgcGFzdGVkVmFsdWUgPSBwYXN0ZWRWYWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhc3RlZFZhbHVlLnJlcGxhY2UoXCJtYWlsdG86XCIsIFwiXCIpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkZWZpbml0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgJyonOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBcIlswLTlBLVphLXohIyQlJicqKy89P15fYHt8fX5cXC1dXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzaW5nOiBcImxvd2VyXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pOyAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBwdWJsaWMgZnVuY3Rpb25zXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGRlbW9zKCk7IFxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0oKTtcclxuXHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICBLVElucHV0bWFzay5pbml0KCk7XHJcbn0pOyJdLCJmaWxlIjoiLi9yZXNvdXJjZXMvbWV0cm9uaWMvanMvcGFnZXMvY3J1ZC9mb3Jtcy93aWRnZXRzL2lucHV0LW1hc2suanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/metronic/js/pages/crud/forms/widgets/input-mask.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/metronic/js/pages/crud/forms/widgets/input-mask.js"]();
/******/ 	
/******/ })()
;