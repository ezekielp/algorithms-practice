# @param {String[][]} accounts
# @return {String[][]}
require 'set'

def accounts_merge(accounts)
    res_hash = {}
    emails_set = Set.new([])
    email_to_idx_hash = {}
    
    accounts.each_with_index do |a, i|
        account_idxs_to_merge = []
        current_account_emails = Set.new([])
        
        j = 1
        while j < a.length
            curr = a[j]
            current_account_emails.add(curr)

            if emails_set.include?(curr)
                account_idxs_to_merge << email_to_idx_hash[curr]
            else
                emails_set.add(curr)
                email_to_idx_hash[curr] = i
            end
            
            j += 1
        end

        account_idxs_to_merge << i
        res_hash[i] = current_account_emails
        
        if account_idxs_to_merge.length > 1
            target_account_idx = account_idxs_to_merge[0]
            k = 1
            while k < account_idxs_to_merge.length
                idx = account_idxs_to_merge[k]
                res_hash[target_account_idx] += res_hash[idx]
                res_hash.delete(idx)
                k += 1
            end
        end
    end
    
    res = []
    
    res_hash.each do |k, v|
        new_account = [accounts[k][0]] + v.to_a.sort
        res << new_account
    end
    
    res
end

# res_hash = {}
# emails_set = { "johnsmith@mail.com", "john00@mail.com" }
# email_to_idx_hash = { 
#   "johnsmith@mail.com": 0
#   "john00@mail.com": 0
# }


# [["Alex","Alex5@m.co","Alex4@m.co","Alex0@m.co"],["Ethan","Ethan3@m.co","Ethan3@m.co","Ethan0@m.co"],["Kevin","Kevin4@m.co","Kevin2@m.co","Kevin2@m.co"],["Gabe","Gabe0@m.co","Gabe3@m.co","Gabe2@m.co"],["Gabe","Gabe3@m.co","Gabe4@m.co","Gabe2@m.co"]]


