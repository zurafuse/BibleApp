USE [Bible]
GO

/****** Object:  View [dbo].[v_concordance]    Script Date: 9/10/2025 10:32:16 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


CREATE VIEW [dbo].[v_concordance] AS
SELECT s.[id] ID
	  ,b.bname + ' ' + CAST(s.chapter as varchar) + ':' + CAST(s.verse as varchar) Verse
      ,[eng]
      ,[item] Instance
	  ,h.word Hebrew
	  ,g.word Greek
  FROM [Bible].[dbo].[WebsterStrongs] s
  LEFT JOIN Books b on (b.id = s.book)
  LEFT JOIN dbo.HebStrongs h ON (h.id = s.id)
  LEFT JOIN dbo.GrkStrongs g ON (g.id = s.id)
GO


