import pandas as pd


def duplicate_emails(person: pd.DataFrame) -> pd.DataFrame:
       
    emails_count=person["email"].value_counts()
     
    duplicate_emails=emails_count[emails_count > 1].index

    return pd.DataFrame({"Email":duplicate_emails})
