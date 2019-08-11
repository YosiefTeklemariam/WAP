package edu.mum.cs472;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;

public class SimpleCalculator extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws javax.servlet.ServletException, IOException {

        PrintWriter out = response.getWriter();

        int op1=Integer.parseInt(request.getParameter("operand1"));
        int op2=Integer.parseInt(request.getParameter("operand2"));
        int result1=op1+op2;
        int op3=Integer.parseInt(request.getParameter("operand1"));
        int op4=Integer.parseInt(request.getParameter("operand2"));
        int result2=op3*op4;

        out.print("<html><head><title>Test</title></head><body>" );

        out.print(op1+"+"+op2+"="+result1+"<br />");
        out.print(op3+"*"+op4+"="+result2);

        out.print("</body></html>");
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws javax.servlet.ServletException, IOException {
    }
}
