import requests
import csv
import sys

class CronJob:

    def __init__(self, url, merchantListFile):
        self.url = url
        self.merchantListFile = merchantListFile

    def populateMerchants(self):
        merchants = []

        with open(self.merchantListFile) as merchantFile:
            merchantReader = csv.reader(merchantFile, delimiter=',')
            fields = next(merchantReader)

            for merchant in merchantReader:
                obj = {}

                for index, field in enumerate(fields):
                    obj[field] = merchant[index]

                merchants.append(obj)
                
            x = requests.post(self.url, json = { 'merchants' : merchants })

            print(x.text)         


if __name__ == '__main__':
    util = CronJob('http://localhost:3000/service/merchant', '/Users/namazgurbanov/Desktop/SF Food Trucks/BE/scripts/Mobile_Food_Facility_Permit.csv')
    util.populateMerchants()