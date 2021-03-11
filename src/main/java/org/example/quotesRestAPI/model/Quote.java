package org.example.quotesRestAPI.model;

public class Quote {
    private String id;
    private String quote;

    public Quote() {
    }

    public Quote(String quote) {
        this.quote = quote;
    }

    public String getId() {
        return id;
    }

    public String getQuote() {
        return quote;
    }

    public void setId(String id) {
        this.id = id;
    }

    @Override
    public int hashCode() {
        return getQuote().hashCode();
    }
}
