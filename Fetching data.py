import requests
import json

api_key = "eyJhbGciOiJFZERTQSIsImtpZCI6ImNjNTY0MzA3LTI5MWMtYTVkNy0wMmM1LTBkMTE1YmM5NjM2ZSJ9.eyJhdWQiOiJ2aXJhbHNxdWFyZSIsImV4cCI6MTcyNzkwMTY1MSwiaWF0IjoxNjk2MzQ0Njk5LCJpc3MiOiJodHRwczovL29wcy5jb3Jlc2lnbmFsLmNvbTo4MzAwL3YxL2lkZW50aXR5L29pZGMiLCJuYW1lc3BhY2UiOiJyb290IiwicHJlZmVycmVkX3VzZXJuYW1lIjoidmlyYWxzcXVhcmUiLCJzdWIiOiJmYTBjNGM5Yy1jMjFjLWZmZGYtYzBiOS00OGFlZDVhZjljMTYiLCJ1c2VyaW5mbyI6eyJzY29wZXMiOiJjZGFwaSJ9fQ.OilIP0SzzCeLtq6WKtDWStiRXhmKiNZ6PvMWGQw_Us4mWOfrWMI1tWw1-Pj3E4S46i1PvbmKIHvaPV6M7P8UAQ"

def search_member_data(name, company_name):
    base_url = "https://api.coresignal.com/cdapi/v1/linkedin/member/search/filter"
    
    search_criteria = {
        "name": name,
        "experience_company_name": company_name
    }
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
    }

    try:
        response = requests.post(base_url, json=search_criteria, headers=headers)
        if response.status_code == 200:
            data = response.json()
            if data:
                person_id = data[0]
                return person_id
            else:
                print("Person not found.")
                return None
        else:
            print(f"Error: {response.status_code}")
            return None
    except requests.exceptions.RequestException as e:
        print(f"Request Error: {str(e)}")
        return None

def collect_member_profile(person_id):
    base_url = f"https://api.coresignal.com/cdapi/v1/linkedin/member/collect/{person_id}"

    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
    }

    try:
        response = requests.get(base_url, headers=headers)

        if response.status_code == 200:
            data = response.json()
            return data
        else:
            print(f"Error: {response.status_code}")
            return None
    except requests.exceptions.RequestException as e:
        print(f"Request Error: {str(e)}")
        return None

if __name__ == "__main__":
    all_data = []

    for i in range(1):
        person_name = input(f"Enter the person's name {i+1}: ")
        company_name = input(f"Enter the person's company name {i+1}: ")

        person_id = search_member_data(person_name, company_name)

        if person_id:
            data = collect_member_profile(person_id)

            if data:
                relevant_data = {
                    "Name": data.get("name", "N/A"),
                    "Title": data.get("title", "N/A"),
                    "LinkedIn Profile": data.get("url", "N/A"),
                    "Location": data.get("location", "N/A"),
                    "Company Name": company_name,
                    "Connections": data.get("connections", "N/A")
                }
                all_data.append(relevant_data)

    print("Data retrieved successfully:")
    print(json.dumps(all_data, indent=4))
