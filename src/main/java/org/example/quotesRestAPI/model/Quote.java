package org.example.quotesRestAPI.model;

import javax.ws.rs.FormParam;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;

@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "quotes", propOrder = {"id", "quote"})

public class Quote {
    @FormParam("id") private String id;
    @FormParam("quote") private String quote;

    public Quote(){}

    public Quote(String quote){
        this.quote = quote;
    }

    public String getId(){
        return id;
    }

    public String getQuote(){
        return quote;
    }

    public void setId(String id){
        this.id = id;
    }
    @Override
    public int hashCode() {
        return getQuote().hashCode();
    }
}
