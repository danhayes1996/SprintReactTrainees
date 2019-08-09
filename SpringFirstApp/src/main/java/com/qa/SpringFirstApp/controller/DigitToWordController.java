package com.qa.SpringFirstApp.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.qa.SpringFirstApp.DigitToWords;

@RestController
public class DigitToWordController {

	@RequestMapping(value="/d2w/{num}", method= {RequestMethod.GET, RequestMethod.POST})
	public String d2w(@PathVariable("num") long num) {
		return new DigitToWords().digitToEnglish(num);
	}
}
