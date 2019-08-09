package com.qa.SpringFirstApp.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MathsController {

	@RequestMapping(value="/operations/{num1}/{op}/{num2}", method=RequestMethod.GET)
	public String operation(@PathVariable("num1")int n1, @PathVariable("op")String op, @PathVariable("num2")int n2) {
		switch(op) {
			case "+": return "The result of adding is = " + (n1 + n2);
			case "-": return "The result of adding is = " + (n1 - n2);
			case "div": return "The result of adding is = " + (n1 / n2);
			case "*": return "The result of adding is = " + (n1 * n2);
			default :
				return "Invalid operator";
		}
	}
	
}
