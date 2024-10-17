import React from "react";
import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";
import Navbar from "../components/Navbar";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <h1 className="dashboard-header">Dashboard</h1>
      <PowerBIEmbed
        embedConfig={{
          type: "report", // Supported types: report, dashboard, tile, visual, qna, paginated report and create
          id: "1bcc9648-be7f-408b-801a-7d3d1c08389b",
          embedUrl:
            "https://app.powerbi.com/view?r=eyJrIjoiZjM5YmZmMWUtMjdjNy00Y2Q2LWI4ODctM2M0MzExOWI4ZjhhIiwidCI6ImRiZDY2NjRkLTRlYjktNDZlYi05OWQ4LTVjNDNiYTE1M2M2MSIsImMiOjl9",
          accessToken:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IkwxS2ZLRklfam5YYndXYzIyeFp4dzFzVUhIMCIsImtpZCI6IkwxS2ZLRklfam5YYndXYzIyeFp4dzFzVUhIMCJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZGJkNjY2NGQtNGViOS00NmViLTk5ZDgtNWM0M2JhMTUzYzYxLyIsImlhdCI6MTcxNjIyMjEyMSwibmJmIjoxNzE2MjIyMTIxLCJleHAiOjE3MTYyMjY5NTIsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84V0FBQUFONHpRczNlSkhMb0srRXNBQmJNSW5zUzdXQXUyWG4vM2h1QjNGaDZxNis1cXo0Q1NJcm8vN2tSdk1oTldlS0tFIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6IjE4ZmJjYTE2LTIyMjQtNDVmNi04NWIwLWY3YmYyYjM5YjNmMyIsImFwcGlkYWNyIjoiMCIsImlwYWRkciI6IjE5Ny41LjEyOS42IiwibmFtZSI6Im1vaGFtZWRzYWxlbW1lbnNzaSIsIm9pZCI6ImY3OThlZGE5LTI3NTMtNGZiMC1hN2M3LWI2NDBjYWQ0YTU0NCIsInB1aWQiOiIxMDAzMjAwMDY3RTYxNzAwIiwicmgiOiIwLkFSOEFUV2JXMjdsTzYwYVoyRnhEdWhVOFlRa0FBQUFBQUFBQXdBQUFBQUFBQUFBZkFEQS4iLCJzY3AiOiJBcHAuUmVhZC5BbGwgQ2FwYWNpdHkuUmVhZC5BbGwgQ2FwYWNpdHkuUmVhZFdyaXRlLkFsbCBDb250ZW50LkNyZWF0ZSBEYXNoYm9hcmQuUmVhZC5BbGwgRGFzaGJvYXJkLlJlYWRXcml0ZS5BbGwgRGF0YWZsb3cuUmVhZC5BbGwgRGF0YWZsb3cuUmVhZFdyaXRlLkFsbCBEYXRhc2V0LlJlYWQuQWxsIERhdGFzZXQuUmVhZFdyaXRlLkFsbCBHYXRld2F5LlJlYWQuQWxsIEdhdGV3YXkuUmVhZFdyaXRlLkFsbCBJdGVtLkV4ZWN1dGUuQWxsIEl0ZW0uUmVhZFdyaXRlLkFsbCBJdGVtLlJlc2hhcmUuQWxsIE9uZUxha2UuUmVhZC5BbGwgT25lTGFrZS5SZWFkV3JpdGUuQWxsIFBpcGVsaW5lLkRlcGxveSBQaXBlbGluZS5SZWFkLkFsbCBQaXBlbGluZS5SZWFkV3JpdGUuQWxsIFJlcG9ydC5SZWFkV3JpdGUuQWxsIFJlcHJ0LlJlYWQuQWxsIFN0b3JhZ2VBY2NvdW50LlJlYWQuQWxsIFN0b3JhZ2VBY2NvdW50LlJlYWRXcml0ZS5BbGwgVGVuYW50LlJlYWQuQWxsIFRlbmFudC5SZWFkV3JpdGUuQWxsIFVzZXJTdGF0ZS5SZWFkV3JpdGUuQWxsIFdvcmtzcGFjZS5HaXRDb21taXQuQWxsIFdvcmtzcGFjZS5HaXRVcGRhdGUuQWxsIFdvcmtzcGFjZS5SZWFkLkFsbCBXb3Jrc3BhY2UuUmVhZFdyaXRlLkFsbCIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6IjhGZXZqSmR4UTVkMXlqY0RNbTRGUWxCbFlobkNzZktURTZJRVBFVU8zU1EiLCJ0aWQiOiJkYmQ2NjY0ZC00ZWI5LTQ2ZWItOTlkOC01YzQzYmExNTNjNjEiLCJ1bmlxdWVfbmFtZSI6Im1vaGFtZWRzYWxlbW1lbnNzaUBpc2xhaWIudS1qZW5kb3ViYS50biIsInVwbiI6Im1vaGFtZWRzYWxlbW1lbnNzaUBpc2xhaWIudS1qZW5kb3ViYS50biIsInV0aSI6IklHRUJ3ai1PbkV5ZVk4bTZLU2lBQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.gcneoYHvupgDLodKjS0GU2g2LndVRgEMdY74o2q81pLQc7Md9PNKGvFLxQj1hLFVt4JFFgFbqgRDE55XtzN0bIZMGCnxwGaU1SVtjGCbZYUmU4-30__4PHV90x_GrH47GRbzSXP2ngjq8jXypsQL_uwPO8ME9IjHjCMB6ut2dS4E4x5bQie25vq7SHfua7aCukKEgooxrBqHpmi8xMWQYLEXW_FMwP4eOl9mOKZ-J-kprl2dXShcn-O6_cj1gvIeE9ktoTx_0_MjeADAARs9acX8F0Cxepv9KjMiKBkhqD3QXhdfy9fFxw1ayhrAYmVEyqU14cL6mqO6RrQZl810BA",
          tokenType: models.TokenType.Embed, // Use models.TokenType.Aad for SaaS embed
          settings: {
            panes: {
              filters: {
                expanded: false,
                visible: false,
              },
            },
            background: models.BackgroundType.Transparent,
          },
        }}
        eventHandlers={
          new Map([
            [
              "loaded",
              function () {
                console.log("Report loaded");
              },
            ],
            [
              "rendered",
              function () {
                console.log("Report rendered");
              },
            ],
            [
              "error",
              function (event) {
                console.log(event.detail);
              },
            ],
            ["visualClicked", () => console.log("visual clicked")],
            ["pageChanged", (event) => console.log(event)],
          ])
        }
        cssClassName={"reportClass"}
        getEmbeddedComponent={(embeddedReport) => {
          window.report = embeddedReport;
        }}
      />
    </div>
  );
};

export default Dashboard;
