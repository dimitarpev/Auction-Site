API description template

# **Table of Contents**
[1.***	***Class diagram	3******](#_toc71106369)***

[***2.***	***GET requests	4******](#_toc71106370)

[***3.***	***POST requests	5******](#_toc71106371)

[***4.***	***PUT requests	6******](#_toc71106372)

[***5.***	***DELETE requests	7******](#_toc71106373)




1. # <a name="_toc71106369"></a>Class diagram

![A diagram of a computer
![Aspose.Words.62b9d4d4-3347-4836-bb32-c1b9c4b5ed20.001.png](Aspose.Words.62b9d4d4-3347-4836-bb32-c1b9c4b5ed20.001.png)
Description automatically generated with medium confidence](Aspose.Words.62b9d4d4-3347-4836-bb32-c1b9c4b5ed20.001.png)
1. # <a name="_toc71106370"></a>GET requests

*Add your requests here. Copy-paste the template for each different request.*

Template GET table:

## <a name="_toc138596591"></a>GET requests

<table><tr><th valign="top"><b>GET</b></th><th colspan="4" valign="top"><b>/antiques</b></th></tr>
<tr><td colspan="5" valign="top">Gets all the antiques</td></tr>
<tr><td colspan="5" valign="top"></td></tr>
<tr><td colspan="2" valign="top"><b>Parameters:</b></td><td valign="top"><b>Name</b></td><td valign="top"><b>Type</b></td><td valign="top"><b>Description</b></td></tr>
<tr><td colspan="2" rowspan="5" valign="top"><i>* required</i></td><td valign="top">year</td><td valign="top">query</td><td valign="top">Returns antiques based on the given year</td></tr>
<tr><td valign="top">Origin</td><td valign="top">query</td><td valign="top">Return antiques based on the given origin</td></tr>
<tr><td valign="top">Material</td><td valign="top">query</td><td valign="top">Returns antiques based on the given material</td></tr>
<tr></tr>
<tr></tr>
<tr><td colspan="2" valign="top"><b>Responses:</b></td><td valign="top"><b>Code</b></td><td colspan="2" valign="top"><b>Description / example if successful</b></td></tr>
<tr><td colspan="2" valign="top"></td><td valign="top">200</td><td colspan="2" valign="top">Got the list of antiques which can be empty</td></tr>
</table>

Ant/id/bids

User/id/bids

<table><tr><th valign="top"><b>GET</b></th><th colspan="4" valign="top"><b>/antiques/{id}</b></th></tr>
<tr><td colspan="5" valign="top">Gets antique with the specified id</td></tr>
<tr><td colspan="5" valign="top"></td></tr>
<tr><td colspan="2" valign="top"><b>Parameters:</b></td><td valign="top"><b>Name</b></td><td valign="top"><b>Type</b></td><td valign="top"><b>Description</b></td></tr>
<tr><td colspan="2" rowspan="3" valign="top"><i>* required</i></td><td valign="top">Id*</td><td valign="top">path</td><td valign="top">Id of the antique to find</td></tr>
<tr></tr>
<tr></tr>
<tr><td colspan="2" valign="top"><b>Responses:</b></td><td valign="top"><b>Code</b></td><td colspan="2" valign="top"><b>Description / example if successful</b></td></tr>
<tr><td colspan="2" valign="top"></td><td valign="top">200</td><td colspan="2" valign="top">Got the data for the antique with the specified id</td></tr>
<tr><td colspan="2" valign="top"></td><td valign="top">404</td><td colspan="2" valign="top">A antique with that id is not found</td></tr>
</table>


<table><tr><th valign="top"><b>GET</b></th><th colspan="4" valign="top"><b>/users</b></th></tr>
<tr><td colspan="5" valign="top">Get all users</td></tr>
<tr><td colspan="5" valign="top"></td></tr>
<tr><td colspan="2" valign="top"><b>Parameters:</b></td><td valign="top"><b>Name</b></td><td valign="top"><b>Type</b></td><td valign="top"><b>Description</b></td></tr>
<tr><td colspan="2" rowspan="3" valign="top"><i>* required</i></td><td valign="top">limit</td><td valign="top">query</td><td valign="top">Limits the return up to the passed X limit</td></tr>
<tr></tr>
<tr></tr>
<tr><td colspan="2" valign="top"><b>Responses:</b></td><td valign="top"><b>Code</b></td><td colspan="2" valign="top"><b>Description / example if successful</b></td></tr>
<tr><td colspan="2" valign="top"></td><td valign="top">200</td><td colspan="2" valign="top">Got the list of users which can be empty</td></tr>
</table>


<table><tr><th valign="top"><b>GET</b></th><th colspan="4" valign="top"><b>/users/{id}</b></th></tr>
<tr><td colspan="5" valign="top">Gets the user with the specified id</td></tr>
<tr><td colspan="5" valign="top"></td></tr>
<tr><td colspan="2" valign="top"><b>Parameters:</b></td><td valign="top"><b>Name</b></td><td valign="top"><b>Type</b></td><td valign="top"><b>Description</b></td></tr>
<tr><td colspan="2" rowspan="2" valign="top"><i>* required</i></td><td valign="top">id*</td><td valign="top">path</td><td valign="top">Id of user to find</td></tr>
<tr></tr>
<tr><td colspan="2" valign="top"><b>Responses:</b></td><td valign="top"><b>Code</b></td><td colspan="2" valign="top"><b>Description / example if successful</b></td></tr>
<tr><td colspan="2" valign="top"></td><td valign="top">200</td><td colspan="2" valign="top">Got the data for the user with the specified id</td></tr>
<tr><td colspan="2" valign="top"></td><td valign="top">404</td><td colspan="2" valign="top">A user with that id is not found</td></tr>
</table>


<table><tr><th valign="top"><b>GET</b></th><th colspan="4" valign="top"><b>/antiques/{id}/bids</b></th></tr>
<tr><td colspan="5" valign="top">Gets all bids for the antique with the specified id</td></tr>
<tr><td colspan="5" valign="top"></td></tr>
<tr><td colspan="2" valign="top"><b>Parameters:</b></td><td valign="top"><b>Name</b></td><td valign="top"><b>Type</b></td><td valign="top"><b>Description</b></td></tr>
<tr><td colspan="2" valign="top"></td><td valign="top">Id*</td><td valign="top">path</td><td valign="top">Id of antique to find</td></tr>
<tr><td colspan="2" rowspan="3" valign="top"><i>* required</i></td></tr>
<tr></tr>
<tr></tr>
<tr><td colspan="2" valign="top"><b>Responses:</b></td><td valign="top"><b>Code</b></td><td colspan="2" valign="top"><b>Description / example if successful</b></td></tr>
<tr><td colspan="2" valign="top"></td><td valign="top">200</td><td colspan="2" valign="top">Got the list of bids which can be empty</td></tr>
<tr><td colspan="2" valign="top"></td><td valign="top">404</td><td colspan="2" valign="top">An antique with that id is not found</td></tr>
</table>


<table><tr><th valign="top"><b>GET</b></th><th colspan="4" valign="top"><b>/users/{id}/bids</b></th></tr>
<tr><td colspan="5" valign="top">Gets the bids for the user with the specified id</td></tr>
<tr><td colspan="5" valign="top"></td></tr>
<tr><td colspan="2" valign="top"><b>Parameters:</b></td><td valign="top"><b>Name</b></td><td valign="top"><b>Type</b></td><td valign="top"><b>Description</b></td></tr>
<tr><td colspan="2" rowspan="2" valign="top"><i>* required</i></td><td valign="top">id*</td><td valign="top">path</td><td valign="top">Id of user to find</td></tr>
<tr></tr>
<tr><td colspan="2" valign="top"><b>Responses:</b></td><td valign="top"><b>Code</b></td><td colspan="2" valign="top"><b>Description / example if successful</b></td></tr>
<tr><td colspan="2" valign="top"></td><td valign="top">200</td><td colspan="2" valign="top">Got the list of bids which can be empty</td></tr>
<tr><td colspan="2" valign="top"></td><td valign="top">404</td><td colspan="2" valign="top">An user with that id is not found</td></tr>
</table>



<table><tr><th valign="top"><b>GET</b></th><th colspan="4" valign="top"><b>/url/{pathParam}?queryParam=value</b></th></tr>
<tr><td colspan="5" valign="top">[description here. Explain what the request does when executed successfully.]</td></tr>
<tr><td colspan="5" valign="top"></td></tr>
<tr><td colspan="2" valign="top"><b>Parameters:</b></td><td valign="top"><b>Name</b></td><td valign="top"><b>Type</b></td><td valign="top"><b>Description</b></td></tr>
<tr><td colspan="2" rowspan="5" valign="top"><i>Add a * to the name of required parameters.</i> </td><td valign="top"></td><td valign="top">(path / query)</td><td valign="top"></td></tr>
<tr><td valign="top"></td><td valign="top">(path / query)</td><td valign="top"></td></tr>
<tr><td valign="top"></td><td valign="top">(path / query)</td><td valign="top"></td></tr>
<tr><td valign="top"></td><td valign="top">(path / query)</td><td valign="top"></td></tr>
<tr><td valign="top"></td><td valign="top">(path / query)</td><td valign="top"></td></tr>
<tr><td colspan="2" valign="top"><b>Responses:</b></td><td valign="top"><b>Code</b></td><td colspan="2" valign="top"><b>Description / example if successful</b></td></tr>
<tr><td colspan="2" rowspan="5" valign="top"></td><td valign="top"></td><td colspan="2" valign="top"></td></tr>
<tr><td valign="top"></td><td colspan="2" valign="top"></td></tr>
<tr><td valign="top"></td><td colspan="2" valign="top"></td></tr>
<tr><td valign="top"></td><td colspan="2" valign="top"></td></tr>
<tr><td valign="top"></td><td colspan="2" valign="top"></td></tr>
</table>

1. # <a name="_toc71106371"></a>POST requests

*Add your requests here. Copy-paste the template for each different request.*

Template POST table:



<table><tr><th valign="top"><b>POST</b></th><th colspan="4" valign="top"><b>/antiques</b></th></tr>
<tr><td colspan="5" valign="top">Adds an antique</td></tr>
<tr><td colspan="5" valign="top"></td></tr>
<tr><td colspan="2" valign="top"><b>Parameters:</b></td><td valign="top"><b>Name</b></td><td valign="top"><b>Type</b></td><td valign="top"><b>Description</b></td></tr>
<tr><td colspan="2" rowspan="2" valign="top"><i>* required</i></td><td valign="top">antique*</td><td valign="top">body</td><td valign="top">The antique being added. JSON body gets filled</td></tr>
<tr></tr>
<tr><td colspan="2" valign="top"><b>Responses:</b></td><td valign="top"><b>Code</b></td><td colspan="2" valign="top"><b>Description / example if successful</b></td></tr>
<tr><td colspan="2" rowspan="2" valign="top"></td><td valign="top">201</td><td colspan="2" valign="top">Antique created successfully and JSON body gets filled</td></tr>
<tr><td valign="top">400</td><td colspan="2" valign="top">Antique could not be created, because fields are empty or invalid</td></tr>
</table>


<table><tr><th valign="top"><b>POST</b></th><th colspan="4" valign="top"><b>/users</b></th></tr>
<tr><td colspan="5" valign="top">Adds a user</td></tr>
<tr><td colspan="5" valign="top"></td></tr>
<tr><td colspan="2" valign="top"><b>Parameters:</b></td><td valign="top"><b>Name</b></td><td valign="top"><b>Type</b></td><td valign="top"><b>Description</b></td></tr>
<tr><td colspan="2" rowspan="2" valign="top"><i>* required</i></td><td valign="top">user*</td><td valign="top">body</td><td valign="top">The user that is being added.  JSON body gets filled</td></tr>
<tr></tr>
<tr><td colspan="2" valign="top"><b>Responses:</b></td><td valign="top"><b>Code</b></td><td colspan="2" valign="top"><b>Description / example if successful</b></td></tr>
<tr><td colspan="2" rowspan="2" valign="top"></td><td valign="top">201</td><td colspan="2" valign="top">User created successfully and JSON body gets filled</td></tr>
<tr><td valign="top">400</td><td colspan="2" valign="top">User could not be created, because fields are empty or invalid</td></tr>
</table>


<table><tr><th valign="top"><b>POST</b></th><th colspan="4" valign="top"><b>/antique/{id}/bids</b></th></tr>
<tr><td colspan="5" valign="top">Adds a bid to an antique with the specified id</td></tr>
<tr><td colspan="5" valign="top"></td></tr>
<tr><td colspan="2" valign="top"><b>Parameters:</b></td><td valign="top"><b>Name</b></td><td valign="top"><b>Type</b></td><td valign="top"><b>Description</b></td></tr>
<tr><td colspan="2" rowspan="3" valign="top"><i>* required</i></td><td valign="top">bid*</td><td valign="top">body</td><td valign="top">The esthetician that is being added. JSON body gets gilled.</td></tr>
<tr><td valign="top">Id*</td><td valign="top">Path</td><td valign="top">Id of antique to find</td></tr>
<tr></tr>
<tr><td colspan="2" valign="top"><b>Responses:</b></td><td valign="top"><b>Code</b></td><td colspan="2" valign="top"><b>Description / example if successful</b></td></tr>
<tr><td colspan="2" rowspan="2" valign="top"></td><td valign="top">201</td><td colspan="2" valign="top">Bid created successfully and JSON body gets filled</td></tr>
<tr><td valign="top">400</td><td colspan="2" valign="top">Bid could not be created, because fields are empty or invalid</td></tr>
</table>



<table><tr><th valign="top"><b>POST</b></th><th colspan="4" valign="top"><b>/url/{pathParam}</b></th></tr>
<tr><td colspan="5" valign="top">[description here. Explain what the request does when executed successfully.]</td></tr>
<tr><td colspan="5" valign="top"></td></tr>
<tr><td colspan="2" valign="top"><b>Parameters:</b></td><td valign="top"><b>Name</b></td><td valign="top"><b>Type</b></td><td valign="top"><b>Description</b></td></tr>
<tr><td colspan="2" rowspan="5" valign="top"><i>Add a * to the name of required parameters.</i> </td><td valign="top"></td><td valign="top">(path / body)</td><td valign="top"></td></tr>
<tr><td valign="top"></td><td valign="top">(path / body)</td><td valign="top"></td></tr>
<tr><td valign="top"></td><td valign="top">(path / body)</td><td valign="top"></td></tr>
<tr><td valign="top"></td><td valign="top">(path / body)</td><td valign="top"></td></tr>
<tr><td valign="top"></td><td valign="top">(path / body)</td><td valign="top"></td></tr>
<tr><td colspan="2" valign="top"><b>Responses:</b></td><td valign="top"><b>Code</b></td><td colspan="2" valign="top"><b>Description / example if successful</b></td></tr>
<tr><td colspan="2" rowspan="5" valign="top"></td><td valign="top"></td><td colspan="2" valign="top"></td></tr>
<tr><td valign="top"></td><td colspan="2" valign="top"></td></tr>
<tr><td valign="top"></td><td colspan="2" valign="top"></td></tr>
<tr><td valign="top"></td><td colspan="2" valign="top"></td></tr>
<tr><td valign="top"></td><td colspan="2" valign="top"></td></tr>
</table>

1. # <a name="_toc71106372"></a>PUT requests

*Add your requests here. Copy-paste the template for each different request.*

Template PUT table:


<table><tr><th valign="top"><b>PATCH</b></th><th colspan="4" valign="top"><b>antiques/{id}</b></th></tr>
<tr><td colspan="5" valign="top">Modifies an antique, based on the given id</td></tr>
<tr><td colspan="5" valign="top"></td></tr>
<tr><td colspan="2" valign="top"><b>Parameters:</b></td><td valign="top"><b>Name</b></td><td valign="top"><b>Type</b></td><td valign="top"><b>Description</b></td></tr>
<tr><td colspan="2" rowspan="3" valign="top"><i>* required</i></td><td valign="top">id *</td><td valign="top">path</td><td valign="top">The id of the antique to be modified</td></tr>
<tr><td valign="top">antique *</td><td valign="top">body</td><td valign="top">The antique body to modify</td></tr>
<tr></tr>
<tr><td colspan="2" valign="top"><b>Responses:</b></td><td valign="top"><b>Code</b></td><td colspan="2" valign="top"><b>Description / example if successful</b></td></tr>
<tr><td colspan="2" rowspan="2" valign="top"></td><td valign="top">200</td><td colspan="2" valign="top">Body contains the modified antique.</td></tr>
<tr><td valign="top">400</td><td colspan="2" valign="top">Body was not modified, because a field is invalid or empty when trying to modify or body id does not match the path id</td></tr>
</table>


<table><tr><th valign="top"><b>PATCH</b></th><th colspan="4" valign="top"><b>users/{id}</b></th></tr>
<tr><td colspan="5" valign="top">Modifies a user, based on the given id</td></tr>
<tr><td colspan="5" valign="top"></td></tr>
<tr><td colspan="2" valign="top"><b>Parameters:</b></td><td valign="top"><b>Name</b></td><td valign="top"><b>Type</b></td><td valign="top"><b>Description</b></td></tr>
<tr><td colspan="2" rowspan="3" valign="top"><i>* required</i></td><td valign="top">id *</td><td valign="top">path</td><td valign="top">The id of the user to be modified</td></tr>
<tr><td valign="top">user *</td><td valign="top">body</td><td valign="top">The user body to modify</td></tr>
<tr></tr>
<tr><td colspan="2" valign="top"><b>Responses:</b></td><td valign="top"><b>Code</b></td><td colspan="2" valign="top"><b>Description / example if successful</b></td></tr>
<tr><td colspan="2" rowspan="2" valign="top"></td><td valign="top">200</td><td colspan="2" valign="top">Body contains the modified user.</td></tr>
<tr><td valign="top">400</td><td colspan="2" valign="top">Body was not modified, because a field is invalid or empty when trying to modify or body id does not match the path id</td></tr>
</table>




<table><tr><th valign="top"><b>PUT</b></th><th colspan="4" valign="top"><b>/{}/{id}</b></th></tr>
<tr><td colspan="5" valign="top">[description here. Explain what the request does when executed successfully.]</td></tr>
<tr><td colspan="5" valign="top"></td></tr>
<tr><td colspan="2" valign="top"><b>Parameters:</b></td><td valign="top"><b>Name</b></td><td valign="top"><b>Type</b></td><td valign="top"><b>Description</b></td></tr>
<tr><td colspan="2" rowspan="5" valign="top"><i>Add a * to the name of required parameters.</i> </td><td valign="top"></td><td valign="top">(path / body)</td><td valign="top"></td></tr>
<tr><td valign="top"></td><td valign="top">(path / body)</td><td valign="top"></td></tr>
<tr><td valign="top"></td><td valign="top">(path / body)</td><td valign="top"></td></tr>
<tr><td valign="top"></td><td valign="top">(path / body)</td><td valign="top"></td></tr>
<tr><td valign="top"></td><td valign="top">(path / body)</td><td valign="top"></td></tr>
<tr><td colspan="2" valign="top"><b>Responses:</b></td><td valign="top"><b>Code</b></td><td colspan="2" valign="top"><b>Description / example if successful</b></td></tr>
<tr><td colspan="2" rowspan="5" valign="top"></td><td valign="top"></td><td colspan="2" valign="top"></td></tr>
<tr><td valign="top"></td><td colspan="2" valign="top"></td></tr>
<tr><td valign="top"></td><td colspan="2" valign="top"></td></tr>
<tr><td valign="top"></td><td colspan="2" valign="top"></td></tr>
<tr><td valign="top"></td><td colspan="2" valign="top"></td></tr>
</table>

1. # <a name="_toc71106373"></a>DELETE requests

*Add your requests here. Copy-paste the template for each different request.*

Template PUT table:


<table><tr><th valign="top"><b>DELETE</b></th><th colspan="4" valign="top"><b>/antiques/{id}</b></th></tr>
<tr><td colspan="5" valign="top">Deletes the antique with the specified id</td></tr>
<tr><td colspan="5" valign="top"></td></tr>
<tr><td colspan="2" valign="top"><b>Parameters:</b></td><td valign="top"><b>Name</b></td><td valign="top"><b>Type</b></td><td valign="top"><b>Description</b></td></tr>
<tr><td colspan="2" rowspan="2" valign="top"><i>* required</i></td><td valign="top">id*</td><td valign="top">path</td><td valign="top">Id of the antique to delete</td></tr>
<tr></tr>
<tr><td colspan="2" valign="top"><b>Responses:</b></td><td valign="top"><b>Code</b></td><td colspan="2" valign="top"><b>Description / example if successful</b></td></tr>
<tr><td colspan="2" rowspan="2" valign="top"></td><td valign="top">200</td><td colspan="2" valign="top">Antique deleted </td></tr>
<tr><td valign="top">404</td><td colspan="2" valign="top">A antique with that Id is not found</td></tr>
</table>


<table><tr><th valign="top"><b>DELETE</b></th><th colspan="4" valign="top"><b>/users/{id}</b></th></tr>
<tr><td colspan="5" valign="top">Deletes data for the user with the specified id</td></tr>
<tr><td colspan="5" valign="top"></td></tr>
<tr><td colspan="2" valign="top"><b>Parameters:</b></td><td valign="top"><b>Name</b></td><td valign="top"><b>Type</b></td><td valign="top"><b>Description</b></td></tr>
<tr><td colspan="2" rowspan="2" valign="top"><i>* required</i></td><td valign="top">id*</td><td valign="top">path</td><td valign="top">Id of the user to delete</td></tr>
<tr></tr>
<tr><td colspan="2" valign="top"><b>Responses:</b></td><td valign="top"><b>Code</b></td><td colspan="2" valign="top"><b>Description / example if successful</b></td></tr>
<tr><td colspan="2" rowspan="2" valign="top"></td><td valign="top">200</td><td colspan="2" valign="top">User deleted </td></tr>
<tr><td valign="top">404</td><td colspan="2" valign="top">A user with that Id is not found</td></tr>
</table>


<table><tr><th valign="top"><b>DELETE</b></th><th colspan="4" valign="top"><b>/antiques/{id}/bids/{id}</b></th></tr>
<tr><td colspan="5" valign="top">Deletes data for bid with the specified id</td></tr>
<tr><td colspan="5" valign="top"></td></tr>
<tr><td colspan="2" valign="top"><b>Parameters:</b></td><td valign="top"><b>Name</b></td><td valign="top"><b>Type</b></td><td valign="top"><b>Description</b></td></tr>
<tr><td colspan="2" rowspan="3" valign="top"><i>* required</i></td><td valign="top">id*</td><td valign="top">path</td><td valign="top">Id of the bid to delete</td></tr>
<tr><td valign="top">Id*</td><td valign="top">path</td><td valign="top">Id of the antique the bid belongs to</td></tr>
<tr></tr>
<tr><td colspan="2" valign="top"><b>Responses:</b></td><td valign="top"><b>Code</b></td><td colspan="2" valign="top"><b>Description / example if successful</b></td></tr>
<tr><td colspan="2" rowspan="2" valign="top"></td><td valign="top">200</td><td colspan="2" valign="top">Bid deleted</td></tr>
<tr><td valign="top">404</td><td colspan="2" valign="top">A bid or antique with that Id is not found</td></tr>
</table>



<table><tr><th valign="top"><b>DELETE</b></th><th colspan="4" valign="top"><b>/url/{pathParam}</b></th></tr>
<tr><td colspan="5" valign="top">[description here. Explain what the request does when executed successfully.]</td></tr>
<tr><td colspan="5" valign="top"></td></tr>
<tr><td colspan="2" valign="top"><b>Parameters:</b></td><td valign="top"><b>Name</b></td><td valign="top"><b>Type</b></td><td valign="top"><b>Description</b></td></tr>
<tr><td colspan="2" rowspan="5" valign="top"><i>Add a * to the name of required parameters.</i> </td><td valign="top"></td><td valign="top">path</td><td valign="top"></td></tr>
<tr><td valign="top"></td><td valign="top">path</td><td valign="top"></td></tr>
<tr><td valign="top"></td><td valign="top">path</td><td valign="top"></td></tr>
<tr><td valign="top"></td><td valign="top">path</td><td valign="top"></td></tr>
<tr><td valign="top"></td><td valign="top">path</td><td valign="top"></td></tr>
<tr><td colspan="2" valign="top"><b>Responses:</b></td><td valign="top"><b>Code</b></td><td colspan="2" valign="top"><b>Description / example if successful</b></td></tr>
<tr><td colspan="2" rowspan="5" valign="top"></td><td valign="top"></td><td colspan="2" valign="top"></td></tr>
<tr><td valign="top"></td><td colspan="2" valign="top"></td></tr>
<tr><td valign="top"></td><td colspan="2" valign="top"></td></tr>
<tr><td valign="top"></td><td colspan="2" valign="top"></td></tr>
<tr><td valign="top"></td><td colspan="2" valign="top"></td></tr>
</table>

2

