from bioblend.galaxy.objects.galaxy_instance import GalaxyInstance
from bioblend.galaxy.users import UserClient
from bioblend.galaxy.tools import ToolClient
from bioblend.galaxy import *

galaxyApiKey = "1ac5ebae2b7739b978e5ac98ff27f434"
galaxyInstance = GalaxyInstance(url='https://calvera-test.ornl.gov', key=galaxyApiKey)
userClient = UserClient(galaxyInstance)
toolClient = ToolClient(galaxyInstance)

tools = toolClient.get_tools()
print(tools)
user = userClient.get_current_user()

accessToken = user['access_token']

print(accessToken)