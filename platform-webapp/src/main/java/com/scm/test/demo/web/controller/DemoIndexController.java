package com.scm.test.demo.web.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping(value = {"/admin"}) 
public class DemoIndexController {
	
	@RequestMapping(value = {"/index"}) 
    public ModelAndView loginForm(HttpServletRequest request, ModelMap model) {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("index");
		return mv;
	}
}
