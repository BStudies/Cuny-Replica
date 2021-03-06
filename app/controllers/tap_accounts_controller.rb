class TapAccountsController < FinancialAccountsController
    def create   
        super      
        @tap_account = TapAccount.new()
        @tap_account.financial_account = @financial_account
        if @tap_account.save!
            render json: {token: @user.auth_token}
        else
            render json: @user.errors, status: :unprocessable_entity
        end
    end
end
