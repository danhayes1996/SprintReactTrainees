package com.qa.SpringFirstApp.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FirstController {

	@RequestMapping(value="/msg", method=RequestMethod.GET)
	public String messageGet() {
		return "Hello World";
	}
	
	@RequestMapping(value="/msg", method=RequestMethod.POST)
	public String messagePost() {
		return "Test post method";
	}
	
	@RequestMapping(value="/msg")
	public String messageOther() {
		return "Test any other HTTP method";
	}
	
	@RequestMapping(value="/msg/{name}", method=RequestMethod.GET)
	public String messageName(@PathVariable("name") String name) {
		return "Hello " + name;
	}
	
	@RequestMapping(value="/msg/{name}/{city}", method=RequestMethod.GET)
	public String messageNameCity(@PathVariable("name") String name, @PathVariable("city") String city) {
		return "Hello " + name + " from " + city;
	}
	
	//example query string: http://localhost:8080/msg2?name=Dan&city=Leicester
	@RequestMapping(value="/msg2")
	public String messageQueryString(@RequestParam("name") String name, @RequestParam("city") String city) {
		return "Hello " + name + " from " + city;
	}
}
