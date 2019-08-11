<%--
  Created by IntelliJ IDEA.
  User: yosie
  Date: 8/7/2019
  Time: 1:52 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>$Title$</title>
  </head>
  <body>
    <a href=hello>Start the simplest servlet app</a>
    <%@ page import="java.util.Date"%> <br/>
    <%-- this comment from jsp --%>
    <%//comment%>
    <%/*comment*/%>
    <%int x = 5;%>
    <!-- this is a comment from html-->
    <%System.out.println ("Evaluating date now"); Date date = new Date();%>
        Hello! The time is now
        <%= date %>
  </body>
</html>
